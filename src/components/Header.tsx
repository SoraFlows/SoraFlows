'use client'

import React, {useEffect, useRef, useState} from 'react'
import LoadingModal from './LoadingModal'
import Image from 'next/image'
import {useCommonContext} from '@/context/common-context'
import {useIsMobile} from '@/lib/useIsMobile'
import MobileTopMenu from '@/components/Menu/MobileTopMenu'
import PCTopMenu from '@/components/Menu/PCTopMenu'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import Link from 'next/link'
import {FaGithub} from 'react-icons/fa'
import LoginButton from '@/components/LoginButton'
import LoginModal from '@/components/LoginModal'
import LogoutModal from '@/components/LogoutModal'
import GeneratingModal from '@/components/GeneratingModal'

export const LayoutHeader = ({
    lang = '',
    page = '',
    mode = 'light',
    currentLanguageText = {
        loginText: 'Log in',
        loadingText: 'Loading...',
        generateText: 'Generating',
        loginModalDesc: 'Login In',
        loginModalButtonText: 'Login',
        logoutModalDesc: 'Logout',
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
    },
}) => {
    const langs = lang
    const [hovered, setHovered] = useState(false)
    const {setShowLoadingModal, userData, showLoadingModal} = useCommonContext()

    const useCustomEffect = (effect, deps) => {
        const isInitialMount = useRef(true)
        useEffect(() => {
            if (
                process.env.NODE_ENV === 'production' ||
                isInitialMount.current
            ) {
                isInitialMount.current = false
                return effect()
            }
        }, [effect])
    }

    useCustomEffect(() => {
        return () => {}
    }, [])

    return (
        <header
            className={`flex w-full items-center justify-between border-b-[0.5px] border-zinc-200 
            ${mode === 'light' ? 'bg-white/80' : 'bg-gray-500'} z-[19] pl-4 pr-4 backdrop-blur md:pl-6 md:pr-6`}>
            {/* // className="sticky top-0 bg-[#020d24] z-20 w-full" */}
            <meta
                name='sogou_site_verification'
                content='zGBv6xzYV2'
            />
            <meta
                name='yandex-verification'
                content='98ea1d5c6ffd0f84'
            />
            <LoadingModal loadingText={currentLanguageText.generateText} />
            <GeneratingModal generatingText={'While generating...'} />
            {/*TODO 这里后续修改成多语言*/}
            <LoginModal
                loadingText={currentLanguageText.loadingText}
                redirectPath={`http://localhost`}
                loginModalDesc={currentLanguageText.loginModalDesc}
                loginModalButtonText={currentLanguageText.loginModalButtonText}
            />
            <LogoutModal
                logoutModalDesc={currentLanguageText.logoutModalDesc}
                confirmButtonText={currentLanguageText.confirmButtonText}
                cancelButtonText={currentLanguageText.cancelButtonText}
                redirectPath={`/${lang}/${page}`}
            />

            <nav
                className='flex w-full items-center justify-between'
                aria-label='Global'>
                <div className='flex items-center justify-center space-x-2'>
                    <a
                        href={`/${lang}`}
                        className='-m-1.5 p-1.5'
                        onClick={() => setShowLoadingModal(true)}>
                        <Image
                            className='h-14 w-auto'
                            src='/favicon.ico'
                            alt='www.soraflows.com'
                            width={64}
                            height={64}
                        />
                    </a>
                    <a
                        href={`/${lang}`}
                        className='-m-1.5 ml-0.5 p-1.5'
                        onClick={() => setShowLoadingModal(true)}>
                        <Image
                            className='h-20 w-auto'
                            src='/soraflows.svg'
                            width={128}
                            height={96}
                            priority
                            alt='www.soraflows.com'
                        />
                    </a>
                </div>
                <div className={`mx-auto`}>
                    {!useIsMobile() ? (
                        <PCTopMenu />
                    ) : (
                        <MobileTopMenu lang={lang} />
                    )}
                </div>
                <div className='flex items-center justify-end space-x-4'>
                    <div className='flex flex-row items-center'>
                        <Link
                            href='/about'
                            className='hidden rounded-xl px-4 py-2 pr-4 font-bold opacity-90 transition duration-300 hover:bg-gray-200 md:text-base lg:flex'>
                            About us
                        </Link>
                        {/* 设置只有中文路由才展示 */}
                        {langs === 'zh' && (
                            <p
                                className='relative hidden rounded-xl px-4 py-2 pr-4 font-bold opacity-90 transition duration-300 hover:bg-gray-200 md:text-base lg:flex'
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
                        )}
                    </div>

                    <Link
                        href='https://github.com/SoraFlows/SoraFlows'
                        className='hidden px-4 pr-4 font-bold opacity-90 md:text-base lg:flex'
                        target='_blank'>
                        Star on Github
                        <FaGithub className='mx-2 text-xl' />
                    </Link>
                    <LanguageSwitcher
                        lang={lang}
                        page={page}
                    />
                </div>
                <div>
                    <LoginButton buttonType={userData ? 1 : 0} />
                    {/*<button onClick={() => loginIn({redirectPath: ''})}> 登录</button>*/}
                    {/* 登录按钮 */}
                </div>
            </nav>
        </header>
    )
}
