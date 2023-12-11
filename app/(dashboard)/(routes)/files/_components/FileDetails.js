"use client"
import React, { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from '@/firebaseConfig'
import Link from 'next/link';


const FileDetails = () => {
    const db = getFirestore(app);
    const [FilesData, setFilesData] = useState([])

    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "uploadedfiles"));

            const filesArray = [];

            querySnapshot.forEach((doc) => {
                filesArray.push(doc.data());
            });
            setFilesData(filesArray);
            console.log("Data loaded successfully");
        } catch (error) {
            console.error("Error loading data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);





    return (
        <div>
            {FilesData.map((item, index) => {
                return (
                    <div className='px-3 py-2 bg-gray-100 w-full my-1 flex items-center justify-between text-left gap-8' key={item.id}>
                        <div className=' w-[10%]'>
                            <h5>{index + 1}</h5>
                        </div>
                        <div className=' w-[20%]'>
                            <h5>{item.userName}</h5>
                        </div>
                        <div className=' w-[30%]'>
                            <h5>{item.filename}</h5>
                        </div>
                        <div className=' w-[10%]'>
                            <h5>{item.fileType}</h5>
                        </div>
                        <div className=' w-[10%]'>
                            <h5>{(item.fileSize / 1024 / 1024).toFixed(2)}MB</h5>
                        </div>
                        <div className=' w-[10%] '>
                            <h5>{item?.password}</h5>
                        </div>
                        <div className=' w-[10%]'>
                            <Link href={item?.shortUrl}>
                                <h5>download</h5>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FileDetails