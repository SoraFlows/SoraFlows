'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {addEmail} from "@/api/fetchData";

export default function MainContent({intl}) {
    const router = useRouter(); // 使用 useRouter 钩子
    const [email, setEmail] = useState('');
    const [showPrompt, setShowPrompt] = useState(false);
    const [showAnimation, setShowAnimation] = useState(false); // 新状态控制动画显示
    // const t = useTranslations('homepage');

    useEffect(() => {
        // 使用 useEffect 确保下面的逻辑在客户端执行
        console.log('Router path:', router);
    }, [router]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // 检查邮箱输入是否为空（或只包含空格）
        // 简单的邮箱格式验证
        const emailRegex = /\S+@\S+\.\S+/;
        const isValidEmail = emailRegex.test(email);

        if (email.trim() === '' || !emailRegex.test(email)) {
            // 如果邮箱不符合格式，则显示提示且不跳转
            setShowPrompt(true); // 显示提示信息
            setShowAnimation(true); // 激活动画
            setTimeout(() => setShowAnimation(false), 1500); // 1.5秒后移除动画效果
            return; // 阻止表单提交和页面跳转
        }else {
            console.log('Form submitted with email:', email);
            await addEmail(email);
            // 表单提交后跳转
            try {
                router.push('/studio');
            } catch (error) {
                console.error('Failed to navigate:', error);
            }

        }

    };
    // 用于处理邮箱输入字段的变化
    const handleEmailChange = (e) => {
        setEmail(e.target.value); // 更新 email 状态，存储输入的值
        // 用户开始输入时隐藏提示
        setShowPrompt(false); // 隐藏提示信息
        setShowAnimation(false); // 如果想要在用户输入时也立即停止任何动画效果，可以加上这行
    };


    // useEffect(() => {
    //     // 当邮箱输入为空时显示提示，否则不显示
    //     setShowPrompt(email.trim() === '');
    // }, [email]);


    return (
        <div className="flex flex-col justify-between items-center">
            {/* <Head>

                <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap"
                    rel="stylesheet" />

            </Head> */}
            <div className="py-10">
                <Image src="/favicon.ico" alt="favicon" width={200} height={200} />
            </div>
            {/*<div className=''>*/}
            <div className='mx-auto w-full max-w-7xl px-5 mb-5'>
                <h1 className="text-7xl py-8 flex justify-center overflow-visible">
                    <span className="wave text-red-500" style={{ animationDelay: '0.1s' }}>S</span>
                    <span className="wave text-green-500" style={{ animationDelay: '0.2s' }}>o</span>
                    <span className="wave text-blue-500" style={{ animationDelay: '0.3s' }}>r</span>
                    <span className="wave text-yellow-500" style={{ animationDelay: '0.4s' }}>a</span>
                    <span className="wave text-purple-500" style={{ animationDelay: '0.5s' }}>F</span>
                    <span className="wave text-pink-500" style={{ animationDelay: '0.4s' }}>l</span>
                    <span className="wave text-indigo-500" style={{ animationDelay: '0.3s' }}>o</span>
                    <span className="wave text-orange-500" style={{ animationDelay: '0.2s' }}>w</span>
                    <span className="wave text-lime-500" style={{ animationDelay: '0.1s' }}>s</span>
                </h1>
                <div className='mx-auto flex max-w-4xl flex-col items-center text-center py-10'>
                    <div className='mb-5 max-w-[528px] lg:mb-8'>
                        <p className='text-xl font-bold'>
                            {intl.pDescription}
                        </p>

                    </div>
                    <a href="https://www.producthunt.com/posts/soraflows?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-soraflows" target="_blank">
                        <Image src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=440901&theme=light"
                        alt="SoraFlows - Open&#0045;source&#0032;AI&#0032;video&#0032;web&#0032;creation&#0032;with&#0032;Sora&#0032;Model | Product Hunt"
                        width="250"
                        height="54" />
                    </a>
                </div>
            </div>



            <p className="text-2xl font-bold">{intl.introduce}</p>
            <p className="text-2xl font-bold">{intl.introduce_2}</p>
            { /* 
            <div className="py-10">
                <form onSubmit={handleSubmit} className='flex flex-col md:flex-row justify-center items-center space-x-6'>
                    <input id="email" placeholder={dictionary.homepage.email_lint} type="email" className="rounded-xl text-xl px-4 py-2" />
                    <input
                        id="email"
                        placeholder={dictionary.homepage.email_lint}
                        type="email"
                        className="rounded-xl text-xl px-4 py-2"
                        value={email} // 绑定email状态
                        onChange={handleEmailChange} // 确保更新email状态
                    />
                    <button type="submit" className="text-xl text-white rounded-xl bg-[#0c8ce9] hover:bg-[#0c8ce9] hover:scale-105 transform-gpu transition px-4 py-2">
                        {dictionary.homepage.submit}
                    </button>
                    {showPrompt && <p className={`text-red-500 ${showAnimation ? 'animate-pulse' : ''}`}>{dictionary.attention.input_email}</p>}
                </form>
            </div>
            */}
            <br></br>
            <button
            onClick={() => router.push('/studio')}
            type="button"
            className="text-xl text-white rounded-xl bg-[#0c8ce9] hover:bg-[#0c8ce9] hover:scale-105 transform-gpu transition px-4 py-2">
                        {intl.get_started}
            </button>
            <br></br>

            <style jsx>{`
                .wave {
                    display: inline-block;
                    font-family: serif;
                    transition: transform 0.5s ease;
                    animation: wave-animation 0.5s ease forwards;
                }

                .wave:hover {
                    transform: scale(1.2);
                }

                @keyframes wave-animation {
                    0% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px) scale(1.2);
                    }
                    100% {
                        transform: translateY(0) scale(1);
                    }
                }
            `}</style>
        </div>

    )
}