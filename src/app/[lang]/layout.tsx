import './globals.css'
import React from 'react'

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