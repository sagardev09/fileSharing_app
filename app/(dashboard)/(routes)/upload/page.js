import React from 'react'
import UploadForm from './_components/UploadForm'

const Upload = () => {
    return (
        <div className='p-5 px-8 md:px-16'>
            <h2 className='text-xl capitalize text-center m-5'> Start
                <span className='text-primary font-bold'> uploading </span> files and <span className='text-primary font-bold'>share</span>  it</h2>
            <UploadForm />
        </div>
    )
}

export default Upload