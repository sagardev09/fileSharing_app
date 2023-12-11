"use client"
import { app } from "@/firebaseConfig"
import React, { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from "firebase/firestore";
import FileItem from "./_components/FileItem";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg"

const DownloadPage = ({ params }) => {

    const db = getFirestore(app);
    const [FileData, setFileData] = useState()

    useEffect(() => {
        params.fileid && getdata()
    }, [])

    const getdata = async () => {
        const docRef = doc(db, "uploadedfiles", params.fileid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setFileData(docSnap.data())
        } else {
            console.log("No such document!");
        }
    }


    return (
        <div className="bg-gray-100 h-screen w-screen flex items-center justify-center gap-4 flex-col">
            <Link href={"/"}>
                <Image src={logo} alt="logo" />
            </Link>
            <FileItem file={FileData} />
        </div>
    )
}

export default DownloadPage