'use client'

import React, { useEffect, useRef } from 'react'
import LoadingModal from './LoadingModal'
import Image from 'next/image'
import { useCommonContext } from '@/context/common-context'
import { useIsMobile } from '@/lib/useIsMobile'
import MobileTopMenu from '@/components/MobileTopMenu'
import PCTopMenu from '@/components/PCTopMenu'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export const LayoutHeader = ({
                                 locale = '',
                                 page = '',
                                 mode = 'light',
                                 currentLanguageText = {
                                     loginText: 'Log in',
                                     loadingText: 'Loading...',
                                     generateText: 'Generating'
                                 }

                             }) => {
    const { showLoadingModal, setShowLoadingModal } = useCommonContext()

    const useCustomEffect = (effect, deps) => {
        const isInitialMount = useRef(true)
        useEffect(() => {
            if (process.env.NODE_ENV === 'production' || isInitialMount.current) {
                isInitialMount.current = false
                return effect()
            }
        }, [effect])
    }

    useCustomEffect(() => {

        return () => {
        }
    }, [])

    return (
        <header
            className={`flex justify-between items-center w-full border-b-[0.5px] border-zinc-200 
            ${(mode === 'light') ? 'bg-white/80' : 'bg-gray-500'} pl-4 pr-4 md:pl-6 md:pr-6 backdrop-blur z-[19]`}
            // className="sticky top-0 bg-[#020d24] z-20 w-full"
        >   
            <meta name="yandex-verification" content="98ea1d5c6ffd0f84" />
            <LoadingModal loadingText={currentLanguageText.generateText} />
            <nav className="flex items-center justify-between w-full" aria-label="Global">

                <div className="flex items-center space-x-2">
                    <a href={`/${locale}`} className="-m-1.5 p-1.5" onClick={() => setShowLoadingModal(true)}>
                        <Image className="h-8 w-auto" src="/logo.png" alt="www.soraflows.com" width={32} height={32} />
                    </a>
                    <a href={`/${locale}`} className="-m-1.5 ml-0.5 p-1.5" onClick={() => setShowLoadingModal(true)}>
                        <Image
                            className="h-8 w-auto"
                            src="/soraflows.svg"
                            width={32}
                            height={24}
                            alt="www.soraflows.com" />
                    </a>
                </div>
                <div className="flex justify-end items-center space-x-4">
                    {!useIsMobile() ? <PCTopMenu /> : <MobileTopMenu />}
                    <LanguageSwitcher locale={locale} />
                </div>
            </nav>
        </header>
    )
}
