"use client";

import Link from "next/link";
import React, {Fragment} from "react";
import Head from "next/head";
import {Menu, Transition} from '@headlessui/react'
import {FaChevronDown, FaGithub} from 'react-icons/fa';
import {languages} from "@/config/locale";
import {Locale} from "@/i18n-config";
import LoadingModal from "./LoadingModal";
import {AiOutlineGlobal} from "react-icons/ai"; // 引入GitHub图标


export const LayoutHeader = ({
    locale = '',
    page='',
    currentLanguageText={
        loginText: 'Log in',
        loadingText: 'Loading...',
        generateText: 'Generating',
    }

}) => {

    const checkLocalAndLoading = (lang: string) => {
        if (locale != lang) {
            console.log('loading');
            // setShowLoadingModal(true);
        }
    }
    return (
        <header
            className="fixed left-0 right-0 top-0 z-[19] border-b-[0.5px] border-zinc-200 bg-white/80 pl-6 backdrop-blur">
            <LoadingModal loadingText={currentLanguageText.generateText}/>
            <nav className="flex h-16 justify-between items-center">
                <div>
                    <Link
                        href="/"
                        className="font-bold opacity-90 md:text-base mr-4 lg:mr-8"
                    >
                        Go Home
                    </Link>
                </div>
                <div className="flex justify-end mr-4 items-center">
                    <Link
                        href="/"
                        className="hidden lg:flex font-bold opacity-90 md:text-base px-4 pr-4"
                    >
                        Contact Us
                    </Link>
                    <Link
                        href="/"
                        className="hidden lg:flex font-bold opacity-90 md:text-base px-4 pr-4"
                    >
                        Home
                    </Link>
                    <Link
                        href="/"
                        className="hidden lg:flex font-bold opacity-90 md:text-base px-4 pr-4"
                    >
                        About us
                    </Link>
                    <Link
                        href="https://github.com/flytoagi/SoraFlows"
                        className="hidden lg:flex font-bold opacity-90 md:text-base px-4 pr-4"
                    >
                        <FaGithub className="text-xl"/>
                    </Link>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button
                                className="inline-flex w-full justify-center gap-x-1.5 border border-[rgba(255,255,255,0.5)] rounded-md px-3 py-2 text-sm font-semibold hover:border-[rgba(255,255,255,0.9)]">
                                <AiOutlineGlobal className="w-5 h-5"/>
                                {locale == 'default' ? 'zh-CN' : locale.toUpperCase()}
                                <FaChevronDown className="-mr-1 h-5 w-5" aria-hidden="true"/>
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
                                            let hrefValue = `/${item.lang}`;
                                            // if (page) {
                                            //   hrefValue = `/${item.lang}/${page}`;
                                            // }
                                            return (
                                                <Menu.Item key={item.lang}>
                                                    <Link href={hrefValue} onClick={() => checkLocalAndLoading(item.lang)}>
                                                      <span
                                                          className={'text-gray-700 block px-4 py-2 text-sm hover:text-[#2d6ae0]'}
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
                </div>

            </nav>
        </header>
    );
};
