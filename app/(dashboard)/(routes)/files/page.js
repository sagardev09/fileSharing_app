import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Files = () => {



    return (
        <div>
            files
            <UserButton afterSignOutUrl="/" />
        </div>
    )
}

export default Files