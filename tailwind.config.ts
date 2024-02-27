import type {Config} from "tailwindcss";

import {addDynamicIconSelectors} from '@iconify/tailwind'

const config: Config = {
    mode: 'jit',
    content: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "home-background": "url('/background.png')",
            }, fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [
        addDynamicIconSelectors(),
    ],
};
export default config;
