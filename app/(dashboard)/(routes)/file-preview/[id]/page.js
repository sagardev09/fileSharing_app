"use client"
import { app } from "@/firebaseConfig"
import React, { useEffect, useState } from 'react'
import { getFirestore, doc, getDoc } from "firebase/firestore";


const FilePreview = ({ params }) => {

    const db = getFirestore(app);
    const [fileInfo, setfileInfo] = useState()


    const getdata = async () => {
        const docRef = doc(db, "uploadedfiles", params?.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setfileInfo(docSnap.data())
        } else {
            console.log("No such document!");
        }
    }

    useEffect(() => {
        console.log(params?.id);
        params?.id && getdata()
    }, [])

    return (
        <div>FilePreview</div>
    )
}

export default FilePreview