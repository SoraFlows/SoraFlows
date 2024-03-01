import Link from 'next/link';
import React from 'react';
import { topNavigation } from '@/config/top-navigation';

export default function PCTopMenu() {
    return (
        <div className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
            <div className='flex flex-row items-center justify-center'>
                {topNavigation.topMenu.map((item) => {
                    return (
                        <>
                            <Link
                                href={`${item.href}`}
                                className='rounded-xl px-4 py-2 pr-4 font-bold opacity-90 transition duration-300 hover:bg-gray-200 md:text-base lg:flex'>
                                {item.name}
                            </Link>
                        </>
                    );
                })}
            </div>
        </div>
    );
}
