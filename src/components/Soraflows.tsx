'use client'
import React from 'react'

const Soraflows = () => {
    return (
        <h1 className='flex justify-center overflow-visible py-8 font-serif-pro text-7xl font-bold'>
            <span
                className='wave text-red-500'
                style={{animationDelay: '0.1s'}}>
                S
            </span>
            <span
                className='wave text-green-500'
                style={{animationDelay: '0.2s'}}>
                o
            </span>
            <span
                className='wave text-blue-500'
                style={{animationDelay: '0.3s'}}>
                r
            </span>
            <span
                className='wave text-yellow-500'
                style={{animationDelay: '0.4s'}}>
                a
            </span>
            <span
                className='wave text-purple-500'
                style={{animationDelay: '0.5s'}}>
                F
            </span>
            <span
                className='wave text-pink-500'
                style={{animationDelay: '0.4s'}}>
                l
            </span>
            <span
                className='wave text-indigo-500'
                style={{animationDelay: '0.3s'}}>
                o
            </span>
            <span
                className='wave text-orange-500'
                style={{animationDelay: '0.2s'}}>
                w
            </span>
            <span
                className='wave text-lime-500'
                style={{animationDelay: '0.1s'}}>
                s
            </span>
            <style jsx>{`
                .wave {
                    display: inline-block;
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
        </h1>
    )
}

export default Soraflows
