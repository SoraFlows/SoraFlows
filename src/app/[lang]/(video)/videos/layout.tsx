import React from 'react'
import {Inter} from 'next/font/google';
import { LayoutHeader } from '@/components/Header'

const inter = Inter({subsets: ['latin']});

export const metadata = {
    title: "",
    description: "",
    openGraph: {
        type: "website",
        locale: "en",
        url: "",
        title: "",
        description: "",
    },
}

export default function LocaleLayout({
                                         children,
                                         params: { lang }
                                     }: {
    children: React.ReactNode;
    params: { lang: string };
}) {
    return (
        <div>
            <LayoutHeader lang={lang} page={'/video'}/>
            {children}
        </div>
    )
}