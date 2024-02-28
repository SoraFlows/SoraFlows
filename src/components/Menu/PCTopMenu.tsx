import Link from 'next/link'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import React, { useState } from 'react'
import { Locale } from '@/i18n'

export default function PCTopMenu() {
    return (
        <div className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
            <div className='flex flex-row items-center justify-center'>
                
                <Link
                    href="/studio"
                    className="lg:flex font-bold opacity-90 md:text-base px-4 py-2 pr-4 hover:bg-gray-200 rounded-xl transition duration-300"
                >
                    Studio
                </Link>
                <Link href="/pricing"
                    className="lg:flex font-bold opacity-90 md:text-base px-4 py-2 pr-4 hover:bg-gray-200 rounded-xl transition duration-300"
                >
                    Pricing
                </Link>
                <Link
                    href="/videos"
                    className="lg:flex font-bold opacity-90 md:text-base px-4 py-2 pr-4 hover:bg-gray-200 rounded-xl transition duration-300"
                >
                    Videos
                </Link>
            </div>
        </div>
    )
}