import { Menu, Transition } from '@headlessui/react'
import { AiOutlineGlobal } from 'react-icons/ai'
import { FaChevronDown } from 'react-icons/fa'
import React, { Fragment } from 'react'
import Link from 'next/link'
import { useCommonContext } from '@/context/common-context'
import { languages } from '@/i18n'

export default function LanguageSwitcher({ lang = '', page = '' }) {
    const { showLoadingModal, setShowLoadingModal } = useCommonContext()
    const checkLocalAndLoading = (langs: string) => {
        if (lang != langs) {
            console.log('loading')
            setShowLoadingModal(true)
        }
    }
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button
                    className="inline-flex w-full justify-center gap-x-1.5 border border-[rgba(255,255,255,0.5)] rounded-md px-3 py-2 text-sm font-semibold hover:border-[rgba(255,255,255,0.9)]">
                    <AiOutlineGlobal className="w-5 h-5" />
                    {lang == '' ? 'English' : lang.toUpperCase()}
                    <FaChevronDown className="-mr-1 h-5 w-5 scale-75" aria-hidden="true" />
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
                    className="absolute right-0 z-10 mt-2 w-26 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {
                            languages.map((item) => {
                                let hrefValue = `/${item.lang}/${page}`
                                return (
                                    <Menu.Item key={item.lang}>
                                        <Link href={hrefValue}
                                              onClick={() => checkLocalAndLoading(item.lang)}>
                                                        <span
                                                            className={'text-gray-700 break-keep block px-4 py-2 text-sm hover:text-[#2d6ae0]'}
                                                        >
                                                            {item.language}
                                                        </span>
                                        </Link>
                                    </Menu.Item>
                                )
                            })
                        }
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}