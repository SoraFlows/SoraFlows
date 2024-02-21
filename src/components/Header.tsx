"use client";

import Link from "next/link";
import React, {Fragment, useEffect, useRef} from "react";
import Head from "next/head";
import {Menu, Transition} from '@headlessui/react'
import {FaChevronDown, FaGithub} from 'react-icons/fa';
import {languages} from "@/config/locale";
import {Locale} from "@/i18n-config";
import LoadingModal from "./LoadingModal";
import {AiOutlineGlobal} from "react-icons/ai"; // 引入GitHub图标
import Image from "next/image";
import {useCommonContext} from "@/context/common-context";

export const LayoutHeader = ({
                                 locale = '',
                                 page = '',
                                 mode = 'light',
                                 currentLanguageText = {
                                     loginText: 'Log in',
                                     loadingText: 'Loading...',
                                     generateText: 'Generating',
                                 }

                             }) => {
    const {showLoadingModal, setShowLoadingModal} = useCommonContext();

    const useCustomEffect = (effect, deps) => {
        const isInitialMount = useRef(true);
        useEffect(() => {
            if (process.env.NODE_ENV === 'production' || isInitialMount.current) {
                isInitialMount.current = false;
                return effect();
            }
        }, [effect]);
    };

    useCustomEffect(() => {

        return () => {
        }
    }, []);

    const checkLocalAndLoading = (lang: string) => {
        if (locale != lang) {
            console.log('loading');
            setShowLoadingModal(true);
        }
    }
    return (
        <header
            className={`flex justify-between items-center w-full border-b-[0.5px] border-zinc-200 
            ${(mode === 'light') ? 'bg-white/80' : 'bg-gray-500'} pl-4 pr-4 md:pl-6 md:pr-6 backdrop-blur z-[19]`}
            // className="sticky top-0 bg-[#020d24] z-20 w-full"
        >
            <LoadingModal loadingText={currentLanguageText.generateText}/>
            <nav className="flex items-center justify-between w-full" aria-label="Global">

                <div className="flex items-center space-x-2">
                    <a href={`/${locale}`} className="-m-1.5 p-1.5" onClick={() => setShowLoadingModal(true)}>
                        <Image className="h-8 w-auto" src="/logo.png" alt="www.soraflows.com" width={32} height={32}/>
                    </a>
                    <a href={`/${locale}`} className="-m-1.5 ml-0.5 p-1.5" onClick={() => setShowLoadingModal(true)}>
                        <Image
                            className="h-8 w-auto"
                            src="/soraflows.svg"
                            width={32}
                            height={24}
                            alt="www.soraflows.com"/>
                    </a>
                    {/* <Link
                        href="/"
                        className="font-bold opacity-90 md:text-base mr-4 lg:mr-8"
                    >
                        Go Home
                    </Link> */}
                </div>
                <div className="md:flex justify-end items-center space-x-4">
                    <Link
                        href="/studio"
                        className="lg:flex font-bold opacity-90 md:text-base px-4 pr-4"
                    >
                        Start SoraFlows
                    </Link>
                    <Link
                        href="/about"
                        className="hidden lg:flex font-bold opacity-90 md:text-base px-4 pr-4"
                    >
                        About us
                    </Link>
                    <Link
                        href="https://github.com/flytoagi/SoraFlows"
                        className="hidden lg:flex font-bold opacity-90 md:text-base px-4 pr-4"
                        target="_blank"
                    >
                        <FaGithub className="text-xl"/>
                    </Link>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button
                                className="inline-flex w-full justify-center gap-x-1.5 border border-[rgba(255,255,255,0.5)] rounded-md px-3 py-2 text-sm font-semibold hover:border-[rgba(255,255,255,0.9)]">
                                <AiOutlineGlobal className="w-5 h-5"/>
                                {locale == 'default' ? 'zh-CN' : locale.toUpperCase()}
                                <FaChevronDown className="-mr-1 h-5 w-5 scale-75" aria-hidden="true"/>
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
                </div>
                <div className="md:hidden">
                    {/* 可以放置一个菜单按钮，用于在小屏幕上打开一个侧边导航栏或弹出菜单 */}
                </div>
            </nav>
        </header>
    );
};
