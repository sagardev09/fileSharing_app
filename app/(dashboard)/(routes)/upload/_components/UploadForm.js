"use client"
import React, { useState } from 'react'
import AlertMessage from './AlertMessage'

const UploadForm = () => {
    const [isfile, setisfile] = useState(null)
    const [alert, setalert] = useState(false)

    const onFileSelect = (file) => {
        console.log(file);
        if (file && file.size > 4000000) {
            setalert(true)
            return
        } else {
            setisfile(file)
            setalert(false)
        }
    }

    return (
        <div>
            <div className='text-center'>

                <div className="flex items-center justify-center w-full">
                    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-[400px] border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-blue-50 ">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX  size : 4mb)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" onChange={(e) => onFileSelect(e.target.files[0])} />
                    </label>
                </div>
                {alert && <AlertMessage msg={"max file size is 4mb"} />}
                <button disabled={!isfile} className='p-3 bg-primary text-white w-[30%] rounded-full mt-5 disabled:bg-gray-400'>Upload</button>

            </div>
        </div>
    )
}

export default UploadForm