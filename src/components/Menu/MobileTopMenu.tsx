import {Menu, Transition} from '@headlessui/react'
import {IoIosMenu} from 'react-icons/io'
import React, {Fragment, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FaGithub} from 'react-icons/fa'
import {topNavigation} from '@/config/top-navigation'

export default function MobileTopMenu({lang = '', page = ''}) {
    const [hovered, setHovered] = useState(false)
    const langs = lang
    return (
        <Menu>
            <div>
                <Menu.Button className='inline-flex w-full justify-center gap-x-1.5 rounded-md border border-[rgba(255,255,255,0.5)] px-3 py-2 text-sm font-semibold hover:border-[rgba(255,255,255,0.9)]'>
                    <IoIosMenu className='h-5 w-5' />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'>
                <Menu.Items className='w-26 absolute right-0 top-8 z-50 mt-2 flex origin-top-right flex-col divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    {topNavigation.topMenu.map((item) => {
                        return (
                            <>
                                <Menu.Item>
                                    <Link
                                        href={`${item.href}`}
                                        className='rounded-xl px-4 py-2 pr-4 font-bold opacity-90 transition duration-300 hover:bg-gray-200 md:text-base lg:flex'>
                                        {item.name}
                                    </Link>
                                </Menu.Item>
                            </>
                        )
                    })}
                    {/* 设置只有中文路由才展示 */}
                    {langs === 'zh' && (
                        <Menu.Item>
                            <p
                                className='relative rounded-xl px-4 py-2 pr-4 font-bold opacity-90 transition duration-300 hover:bg-gray-200 md:text-base lg:flex'
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}>
                                Wechat Group
                                {hovered && (
                                    <Image
                                        className='absolute top-12 rounded-xl border-2 p-2 shadow-md transition duration-150'
                                        src='/wx-group.jpg'
                                        alt='wx-group'
                                        width={200}
                                        height={200}
                                    />
                                )}
                            </p>
                        </Menu.Item>
                    )}
                    <Menu.Item>
                        <Link
                            href='https://github.com/SoraFlows/SoraFlows'
                            className='p-4 font-bold opacity-90 md:text-base lg:flex'
                            target='_blank'>
                            <FaGithub className='text-xl'>
                                <p className='relative rounded-xl px-4 py-2 pr-4 font-bold opacity-90 transition duration-300 hover:bg-gray-200 md:text-base lg:flex'>
                                    GitHub
                                </p>
                            </FaGithub>
                        </Link>
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
