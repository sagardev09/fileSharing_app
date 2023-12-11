import React from 'react'
import Image from 'next/image'

const FileInfo = ({ file }) => {
    return (
        <div className='border border-gray-400 rounded-lg p-5 text-center bg-gray-50 flex flex-col items-center gap-4'>
            <div>
                <Image height={500} width={500} src={file?.fileurl} alt='' />
            </div>
            <div>
                <h5 className=''>
                    File Name : {file?.filename}
                </h5>
                <h5 className='text-[13px] text-gray-400'>
                    File Info : {file?.fileType} {(file?.fileSize / 1024 / 1024).toFixed(2)}MB
                </h5>
            </div>


        </div>
    )
}

export default FileInfo