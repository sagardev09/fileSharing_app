"use client"
import { Download, Eye } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import giphy from "@/public/giphy.gif"
import { useUser } from '@clerk/nextjs'

const FileItem = ({ file }) => {

    const [PasswordInput, setPasswordInput] = useState(true)
    const [accessPassword, setaccessPassword] = useState("")

    const { user } = useUser()
    const togglePasswordInput = () => {
        setPasswordInput(!PasswordInput)
    }
    return file && (
        <div className=''>
            <div className='p-8 rounded-md bg-white flex flex-col items-center w-[400px] '>
                <div className='text-center flex-col gap-3 items-center flex'>
                    <h2 className='text-primary text-[20px]'>
                        {user?.fullName} <br />
                        <strong>Shared file with you</strong></h2>
                    <h2 className='text-[12px] text-gray-400'>find file details below</h2>
                    <Image height={160} width={160} src={giphy} className='h-[160px] w-[160px]' alt='file' />

                    <h2 className='text-gray-500 text-[15px]'>FileName : {file.filename} <br />  FileType : {file.fileType} <br /> FileSize : {(file.fileSize / 1024 / 1024).toFixed(2)}MB </h2>
                </div>
                {file.password.length > 3 && <div className='border rounded-md w-full p-2 flex items-center justify-between mt-5'>
                    <input type={PasswordInput ? "password" : "text"} className='disabled:text-gray-500 bg-transparent outline-none w-full' onChange={(e) => setaccessPassword(e.target.value)} />
                    <Eye className='text-gray-500 cursor-pointer' onClick={togglePasswordInput} />
                </div>}
                <div className='w-full mt-5'>
                    <button disabled={file?.password !== accessPassword} className='w-full p-3 bg-primary text-white text-center rounded-full disabled:bg-gray-500 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-4' onClick={() => window.open(file?.fileurl)}>
                        <Download className='text-white' />Download</button>
                    <h5 className='text-gray-500 capitalize text-[10px] text-center mt-2'>*read the terms and conditions carefully</h5>
                </div>
            </div>
        </div>
    )
}

export default FileItem