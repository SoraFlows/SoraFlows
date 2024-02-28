import { Menu, Transition } from '@headlessui/react'
import { IoIosMenu } from 'react-icons/io'
import React, { Fragment, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { Locale } from '@/i18n'

export default function MobileTopMenu({ lang = '', page = '' }) {
    const [hovered, setHovered] = useState(false)
    const langs = lang
    return (
        <Menu>
            <div>
                <Menu.Button
                    className="inline-flex w-full justify-center gap-x-1.5 border border-[rgba(255,255,255,0.5)] rounded-md px-3 py-2 text-sm font-semibold hover:border-[rgba(255,255,255,0.9)]">
                    <IoIosMenu className="w-5 h-5" />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className="absolute top-8 right-0 z-50 mt-2 w-26 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col">
                    
                    <Menu.Item>
                        <Link
                            href="/studio"
                            className="lg:flex font-bold opacity-90 md:text-base px-4 py-2 pr-4 hover:bg-gray-200 rounded-xl transition duration-300"
                        >
                            Studio
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link
                            href="/pricing"
                            className="lg:flex font-bold opacity-90 md:text-base px-4 py-2 pr-4 hover:bg-gray-200 rounded-xl transition duration-300"
                        >
                            Pricing
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link
                            href="/videos"
                            className="lg:flex font-bold opacity-90 md:text-base px-4 py-2 pr-4 hover:bg-gray-200 rounded-xl transition duration-300"
                        >
                            Videos
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link
                            href="/about"
                            className="lg:flex font-bold opacity-90 md:text-base px-4 py-2 pr-4 hover:bg-gray-200 rounded-xl transition duration-300"
                        >
                            About us
                        </Link>
                    </Menu.Item>
                    {/* 设置只有中文路由才展示 */}
                    {langs === 'zh' && (
                        <Menu.Item>
                            <p
                                className="lg:flex font-bold opacity-90 md:text-base px-4 py-2 pr-4 relative hover:bg-gray-200 rounded-xl transition duration-300"
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
                        </Menu.Item>
                    )}
                    {/* <Menu.Item>
                        <p
                            className="lg:flex font-bold opacity-90 md:text-base px-4 py-2 pr-4 relative hover:bg-gray-200 rounded-xl transition duration-300"
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
                    </Menu.Item> */}

                    <Menu.Item>
                        <Link
                            href="https://github.com/SoraFlows/SoraFlows"
                            className="lg:flex font-bold opacity-90 md:text-base p-4"
                            target="_blank"
                        >
                            <FaGithub className="text-xl">
                                <p className='lg:flex font-bold opacity-90 md:text-base px-4 py-2 pr-4 relative hover:bg-gray-200 rounded-xl transition duration-300'>GitHub</p>
                            </FaGithub>
                        </Link>
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}