"use client"
import { File, Shield, Upload } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from "@/public/logo.svg"
import Link from 'next/link'

const Sidebar = () => {

    const [activeIndex, setactiveIndex] = useState(0)

    const menu = [
        {
            id: 1,
            name: "upload",
            icon: Upload,
            path: "/upload"
        },
        {
            id: 2,
            name: "files",
            icon: File,
            path: "/files"
        },
        {
            id: 3,
            name: "upgrade",
            icon: Shield,
            path: "/upgrade"
        },
    ]
    return (
        <div>
            <div className="flex h-screen flex-col justify-between border-e bg-white">
                <div className="px-4 py-6">
                    <span className="grid h-10 w-32 place-content-center rounded-lg  text-xs text-gray-600 ">
                        <Image src={logo} alt='logo' />
                    </span>

                    <div className="mt-6 flex flex-col gap-3">
                        {
                            menu.map((item, index) => {
                                return (
                                    <Link href={item.path} key={item.id}>
                                        <button className={`flex items-center gap-2 hover:bg-gray-100 px-4 py-2  w-full rounded-lg ${activeIndex === index ? "bg-blue-50 text-primary" : null}`} onClick={() => setactiveIndex(index)}>
                                            <item.icon />
                                            <h5 className="block text-base font-medium ">
                                                {item.name}
                                            </h5>
                                        </button>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar