
import React from 'react'
import FileDetails from './_components/FileDetails'
import SearchFile from './_components/SearchFile'


const Files = () => {



    return (
        <div className='flex flex-col gap-4 p-4'>
            <div>
                <SearchFile />
            </div>
            <div>
                <FileDetails />
            </div>

        </div>
    )
}

export default Files