'use client'
import Image from "next/image";
import Head from "next/head";
import React from "react";

export default function MainContent() {
    return (
        <div className='flex flex-col justify-between items-center'>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <div className='py-20'>
                <Image src='' alt=''/>
                Logo Here
            </div>
            {/*<div className=''>*/}
            <h1 className="text-8xl py-16 flex justify-center overflow-visible">
                <span className="wave text-red-500" style={{ animationDelay: '0.2s' }}>S</span>
                <span className="wave text-green-500" style={{ animationDelay: '0.4s' }}>o</span>
                <span className="wave text-blue-500" style={{ animationDelay: '0.6s' }}>r</span>
                <span className="wave text-yellow-500" style={{ animationDelay: '0.8s' }}>a</span>
                <span className="wave text-purple-500" style={{ animationDelay: '1s' }}>F</span>
                <span className="wave text-pink-500" style={{ animationDelay: '1.2s' }}>l</span>
                <span className="wave text-indigo-500" style={{ animationDelay: '1.4s' }}>o</span>
                <span className="wave text-orange-500" style={{ animationDelay: '1.6s' }}>w</span>
                <span className="wave text-lime-500" style={{ animationDelay: '1.8s' }}>s</span>
            </h1>

            <p className='text-2xl font-bold'>The most advanced model, start from here</p>
            {/*</div>*/}
            <div className='py-10'>
                {/*鼠标移动上去变大*/}
                <button
                    onClick={() => {
                        console.log('click')
                    }}
                    className='text-4xl text-white rounded-xl bg-blue-500 hover:bg-blue-500 hover:scale-125 transform-gpu transition px-4 py-2'>
                    Get Started
                </button>
            </div>
            {/*<div>*/}
            {/*    <video width="750" controls>*/}
            {/*        <source src="https://cdn.openai.com/sora/videos/gold-rush.mp4" type="video/mp4" />*/}
            {/*        Your browser does not support the video tag.*/}
            {/*    </video>*/}
            {/*</div>*/}
            <style jsx>{`
              .wave {
                display: inline-block;
                font-family: 'Roboto Slab', serif;
                transition: transform 0.5s ease;
                animation: wave-animation 0.5s ease forwards;
              }

              .wave:hover {
                transform: scale(1.5);
              }

              @keyframes wave-animation {
                0% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-20px) scale(1.5);
                }
                100% {
                  transform: translateY(0) scale(1);
                }
              }
            `}</style>
        </div>

    )
}