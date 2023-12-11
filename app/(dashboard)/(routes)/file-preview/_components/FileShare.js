"use client"
import GlobalApi from '@/app/utils/GlobalApi'
import { useUser } from '@clerk/nextjs'
import { ref } from 'firebase/storage'
import { Copy, Eye } from 'lucide-react'
import React, { useState } from 'react'

const FileShare = ({ file, OnPasswordSave }) => {

    const [copyurl, setcopyurl] = useState(false)
    const [isPasswordEnable, setisPasswordEnable] = useState(false)
    const [password, setpassword] = useState("")
    const [PasswordInput, setPasswordInput] = useState(true)
    const [Email, SetEmail] = useState()
    const inputref = ref()
    const { user } = useUser()



    const copytoClipboard = (text) => {
        navigator.clipboard.writeText(text)
        setcopyurl(true)
        setTimeout(() => {
            setcopyurl(false)
        }, 1300);
    }
    const togglePasswordInput = () => {
        setPasswordInput(!PasswordInput)
    }

    const sendEmail = () => {
        const data = {
            emailToSend: Email,
            userName: user?.fullName,
            fileName: file.filename,
            fileSize: file.fileSize,
            fileType: file.fileType,
            shortUrl: file.shortUrl
        }
        GlobalApi.SendEmail(data).then(res => {
            console.log(res);
        })
    }



    return file && (
        <div className='flex flex-col gap-2'>
            <div>
                <label className='text-[14px] text-gray-500 capitalize'>short url</label>
                <div className='flex gap-5 p-2 items-center justify-between rounded-md border border-gray-400'>
                    <input ref={inputref} type="text" name="" id="" value={file?.shortUrl} disabled className='disabled:text-gray-500 bg-transparent outline-none w-full' />
                    {!copyurl ? <Copy className='text-gray-400 hover:text-gray-500 cursor-pointer' onClick={() => copytoClipboard(file?.shortUrl)} /> : <h5>copied</h5>}
                </div>
            </div>
            <div className='gap-3 flex mt-5'>
                <input type="checkbox" name="" id="" onChange={() => setisPasswordEnable(!isPasswordEnable)} />
                <label>Enter password?</label>
            </div>
            {isPasswordEnable ? <div className='flex items-center gap-3'>
                <div className='border rounded-md w-full p-2 flex items-center justify-between'>
                    <input type={PasswordInput ? "password" : "text"} className='disabled:text-gray-500 bg-transparent outline-none w-full' onChange={(e) => setpassword(e.target.value)} />
                    <Eye className='text-gray-500 cursor-pointer' onClick={togglePasswordInput} />
                </div>
                <button className='p-2 bg-primary capitalize text-white rounded-md hover:bg-blue-500 cursor-pointer disabled:bg-gray-300' disabled={password?.length < 3} onClick={() => OnPasswordSave(password)}>save</button>
            </div> : null}
            <div className="border border-gray-400 rounded-md p-4 mt-5">
                <div className="flex flex-col gap-5">
                    <label className="text-[16px] text-gray-500 capitalize">Send file to Email</label>
                    <input type="email" className='text-gray-500 bg-transparent outline-none w-full p-2  rounded-md border border-gray-400' onChange={(e) => SetEmail(e.target.value)} placeholder="example@gmail.com" />
                    <button className='p-2 bg-primary capitalize text-white rounded-md hover:bg-blue-500 cursor-pointer w-full ' onClick={() => sendEmail()}>Send Email</button>
                </div>
            </div>
        </div>
    )
}

export default FileShare