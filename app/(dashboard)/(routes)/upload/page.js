"use client"
import React, { useState, useEffect } from 'react'
import UploadForm from './_components/UploadForm'
import { app } from '@/firebaseConfig'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import UploadComplete from './_components/UploadComplete'
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { useUser } from '@clerk/nextjs'
import { randomstring } from '@/app/utils/GenerateRandomString'
import { useRouter } from 'next/navigation'

const Upload = () => {

    const storage = getStorage(app)

    const { user } = useUser()
    const db = getFirestore(app);
    const router = useRouter()
    const [Progress, setProgress] = useState()
    const [showModal, setshowModal] = useState(false)
    const [fileDocId, setfileDocId] = useState()



    const uploadFile = (file) => {

        const storageRef = ref(storage, 'file-upload/' + file?.name);
        const uploadTask = uploadBytesResumable(storageRef, file, file.type);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                setProgress(progress)
                progress == 100 &&
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setshowModal(true)
                        saveInfo(file, downloadURL)
                    });

            }
        )

    }

    useEffect(() => {
        showModal &&
            setTimeout(() => {
                setshowModal(false)
                router.push("/file-preview/" + fileDocId);
            }, 2000);
    }, [showModal === true, fileDocId])





    const saveInfo = async (file, fileUrl) => {
        const docId = randomstring().toString()

        try {
            await setDoc(doc(db, "uploadedfiles", docId), {
                filename: file?.name,
                fileSize: file?.size,
                fileType: file?.type,
                fileurl: fileUrl,
                userEmail: user?.primaryEmailAddress.emailAddress,
                userName: user?.fullName,
                password: "",
                id: docId,
                shortUrl: process.env.NEXT_PUBLIC_BASE_URL + "f/" + docId
            })
            setfileDocId(docId)
            console.log(shortUrl);


        } catch (error) {
            console.error("Error saving document:", error);
        }



    }

    const closemodal = () => {
        setshowModal(false)
    }

    return (
        <div className='p-5 px-8 md:px-16 relative overflow-hidden'>
            {Progress == 100 && showModal ? <div className={"absolute right-[2px] top-[2px] transition-all 200ms"}>
                <UploadComplete closemodal={closemodal} />
            </div> : null}
            <h2 className='text-xl capitalize text-center m-5'> Start
                <span className='text-primary font-bold'> uploading </span> files and <span className='text-primary font-bold'>share</span>  it</h2>
            <UploadForm uploadbutton={(file) => uploadFile(file)} Progress={Progress} />
        </div>
    )
}

export default Upload