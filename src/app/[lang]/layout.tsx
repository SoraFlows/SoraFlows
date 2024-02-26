import './globals.css'
import React from 'react'

export const metadata = {
    title: "",
    description: "",
    icon: "/logo.png",
    openGraph: {
        type: "website",
        locale: "en",
        url: "",
        title: "",
        description: "",
        image: "",
    },
    images: [
        {
            url: ""
        }
    ]
}

export default function LocaleLayout({
                                         children,
                                         params: { lang }
                                     }: {
    children: React.ReactNode;
    params: { lang: string };
}) {
    return (
        <html lang={lang}>
        <body>{children}</body>
        </html>
    )
}