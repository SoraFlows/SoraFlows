import { Menu, Transition } from '@headlessui/react'
import { IoIosMenu } from 'react-icons/io'
import React, { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'

export default function MobileTopMenu() {
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
                    className="absolute top-8 right-0 z-10 mt-2 w-26 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col">
                    <Menu.Item>
                        <Link
                            href="/studio"
                            className="lg:flex font-bold opacity-90 md:text-base px-4 py-2 pr-4 hover:bg-gray-200 rounded-xl transition duration-300"
                        >
                            Start SoraFlows
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
                    <Menu.Item>
                        <Link
                            href="https://github.com/flytoagi/SoraFlows"
                            className="lg:flex font-bold opacity-90 md:text-base p-4"
                            target="_blank"
                        >
                            <FaGithub className="text-xl" />
                        </Link>
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}