import React from 'react'
import Sidebar from '../components/Sidebar'
import TopHeader from '../components/TopHeader'

const layout = ({ children }) => {
    return (
        <div>
            <div className="h-full md:w-64 flex-col fixed inset-y-0 z-50 hidden md:flex">
                <Sidebar />
            </div>
            <div className='md:ml-64'>
                <TopHeader />
                {children}
            </div>
        </div>
    )
}

export default layout