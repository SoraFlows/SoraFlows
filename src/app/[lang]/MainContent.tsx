'use client'
import Image from 'next/image'
import Head from 'next/head'
import React from 'react'
import { LocaleDictionary } from '@/types/locale'

export default function MainContent({ dictionary }: LocaleDictionary) {
    return (
        <div className="flex flex-col justify-between items-center">
            <Head>
                {/*<link rel="icon" href="/logo.png" />*/}
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap"
                      rel="stylesheet" />
            </Head>
            <div className="py-20">
                <Image src="/logo.png" alt="logo" width={200} height={200} />
            </div>
            {/*<div className=''>*/}
            <h1 className="text-7xl py-8 flex justify-center overflow-visible">
                <span className="wave text-red-500" style={{ animationDelay: '0.1s' }}>S</span>
                <span className="wave text-green-500" style={{ animationDelay: '0.2s' }}>o</span>
                <span className="wave text-blue-500" style={{ animationDelay: '0.3s' }}>r</span>
                <span className="wave text-yellow-500" style={{ animationDelay: '0.4s' }}>a</span>
                <span className="wave text-purple-500" style={{ animationDelay: '0.5s' }}>F</span>
                <span className="wave text-pink-500" style={{ animationDelay: '0.4s' }}>l</span>
                <span className="wave text-indigo-500" style={{ animationDelay: '0.3s' }}>o</span>
                <span className="wave text-orange-500" style={{ animationDelay: '0.2s' }}>w</span>
                <span className="wave text-lime-500" style={{ animationDelay: '0.1s' }}>s</span>
            </h1>

            <p className="text-2xl font-bold">{dictionary.homepage.introduce}</p>
            <p className="text-2xl font-bold">{dictionary.homepage.introduce_2}</p>
            <div className="py-10">
                <form>
                    <input id="email" placeholder={dictionary.homepage.email_lint} type="email"
                           className="rounded-xl text-xl px-4 py-2" />
                    <button
                        onClick={() => {
                            console.log('click')
                        }}
                        className="text-xl text-white rounded-xl bg-[#0c8ce9] hover:bg-[#0c8ce9] hover:scale-105 transform-gpu transition px-4 py-2">
                        {dictionary.homepage.submit}
                    </button>
                </form>
            </div>
            <style jsx>{`
                .wave {
                    display: inline-block;
                    font-family: serif;
                    transition: transform 0.5s ease;
                    animation: wave-animation 0.5s ease forwards;
                }

                .wave:hover {
                    transform: scale(1.2);
                }

                @keyframes wave-animation {
                    0% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px) scale(1.2);
                    }
                    100% {
                        transform: translateY(0) scale(1);
                    }
                }
            `}</style>
        </div>

    )
}