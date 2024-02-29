import React from 'react'
import { LayoutHeader } from '@/components/Header'

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
            {/*<Footer/>*/}
        </div>
    )
}