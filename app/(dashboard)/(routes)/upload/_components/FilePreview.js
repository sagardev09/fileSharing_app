import Image from 'next/image'
import React from 'react'
import File from "@/public/file.png"
import { X } from 'lucide-react'

const FilePreview = ({ file, removefile }) => {
    return (
        <div className='flex items-center  gap-4 justify-between border rounded-md mt-5 p-3 border-blue-300'>
            <div className='flex items-center  gap-4'>
                <Image src={File} alt='file' className='h-[60px] w-[60px] object-cover' />
                <div className='text-left'>
                    <h3>{file?.name}</h3>
                    <h3 className='text-gray-400 text-[14px]'>{file?.type} / {(file?.size / 1024 / 1024).toFixed(2)}MB</h3>
                </div>
            </div>
            <div>
                <X className='cursor-pointer text-red-500' onClick={() => removefile()} />
            </div>
        </div>
    )
}

export default FilePreview