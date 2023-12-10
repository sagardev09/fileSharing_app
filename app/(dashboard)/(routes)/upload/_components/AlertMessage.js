import { AlertCircle } from 'lucide-react'
import React from 'react'

const AlertMessage = ({ msg }) => {
    return (
        <div className='bg-red-500 p-4 flex items-center justify-center my-2 gap-4  text-white capitalize rounded-md'>
            <AlertCircle />
            {msg}
        </div>
    )
}

export default AlertMessage