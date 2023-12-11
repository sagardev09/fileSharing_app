import { Search } from 'lucide-react'
import React from 'react'

const SearchFile = () => {
    return (
        <div className='bg-gray-100 w-full items-center flex justify-between py-2 px-3 rounded-md'>
            <div>
                <h2 className='text-[20px] text-gray-500'>All Files</h2>
            </div>
            <div className='flex items-center justify-between gap-4 bg-white p-2 w-[30%] rounded-md'>
                <input type="search" name="" id="" className='outline-none border-none' />
                <Search className='cursor-pointer text-gray-500' />
            </div>
        </div>
    )
}

export default SearchFile