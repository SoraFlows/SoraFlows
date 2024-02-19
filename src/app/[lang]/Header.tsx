'use client'

import Link from "next/link";
import React from "react";
import Head from "next/head";

export const LayoutHeader = () => {
    return (
        <header className="fixed left-0 right-0 top-0 z-[19] border-b-[0.5px] border-zinc-200 bg-white/80 pl-6 backdrop-blur">
            <nav className="flex h-16 justify-between items-center">
                <div>
                <Link href="/" className="font-bold opacity-90 md:text-base mr-4 lg:mr-8">Go Home</Link>
                </div>
                <div className='flex'>
                    <Link href="/dashboard" className="hidden lg:flex font-bold opacity-90 md:text-base px-4">Contact Us</Link>
                    <Link href="/dashboard" className="hidden lg:flex font-bold opacity-90 md:text-base px-4">Home</Link>
                    <Link href="/dashboard" className="hidden lg:flex font-bold opacity-90 md:text-base px-4">About us</Link>
                </div>
            </nav>
        </header>
    )
}
