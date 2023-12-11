"use client"
import { app } from "@/firebaseConfig"
import React, { useEffect, useState } from 'react'
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import FileInfo from "../_components/FileInfo";
import FileShare from "../_components/FileShare";
import Link from "next/link";
import { ArrowLeftSquare } from "lucide-react";


const FilePreview = ({ params }) => {

    const db = getFirestore(app);
    const [file, setFile] = useState()


    const getdata = async () => {
        const docRef = doc(db, "uploadedfiles", params?.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setFile(docSnap.data())
        } else {
            console.log("No such document!");
        }
    }

    useEffect(() => {
        console.log(params?.id);
        params?.id && getdata()
    }, [])

    const OnPasswordSave = async (password) => {
        console.log(password);
        const docRef = doc(db, "uploadedfiles", params?.id);
        await updateDoc(docRef, {
            password: password
        });
    }

    return (
        <div className="px-20 py-12">
            <Link href={"/upload"} className="flex items-center gap-4">
                <ArrowLeftSquare /> Go to Uploads
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-10">

                <FileInfo file={file} />
                <FileShare file={file} OnPasswordSave={(password) => OnPasswordSave(password)} />
            </div>
        </div>
    )
}

export default FilePreview