import Link from 'next/link'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import React, { useState } from 'react'

export default function PCTopMenu() {

    const [hovered, setHovered] = useState(false)
    return (
        <>
            <Link
                href="/studio"
                className="lg:flex font-bold opacity-90 md:text-base px-4 py-2 pr-4 hover:bg-gray-200 rounded-xl transition duration-300"
            >
                Studio
            </Link>
            <Link
                href="/about"
                className="hidden lg:flex font-bold opacity-90 md:text-base px-4 py-2 pr-4 hover:bg-gray-200 rounded-xl transition duration-300"
            >
                About us
            </Link>
            <p
                className="hidden lg:flex font-bold opacity-90 md:text-base px-4 py-2 pr-4 relative hover:bg-gray-200 rounded-xl transition duration-300"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                Wechat Group
                {hovered && (
                    <Image
                        className="absolute top-12 rounded-xl p-2 border-2 shadow-md transition duration-150"
                        src="/wx-group.jpg" alt="wx-group" width={200}
                        height={200} />
                )}
            </p>
            <Link
                href="https://github.com/flytoagi/SoraFlows"
                className="hidden lg:flex font-bold opacity-90 md:text-base px-4 pr-4"
                target="_blank"
            >
                <FaGithub className="text-xl" />
            </Link>
        </>
    )
}