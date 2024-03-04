'use client'
import {useRouter} from 'next/navigation'
import {useSession} from 'next-auth/react'
import {useState} from 'react'
import {useCommonContext} from '@/context/common-context'
import Image from 'next/image'

export default function LoginButton({buttonType = 0, loginText = 'Log in'}) {
    const router = useRouter()
    const {data: session, status} = useSession()

    const {
        userData,
        setUserData,
        showLoginModal,
        setShowLoginModal,
        showLogoutModal,
        setShowLogoutModal,
    } = useCommonContext()
    const [loading, setLoading] = useState(false)

    async function login(event) {
        event.preventDefault()
        setLoading(true)
        let _userData
        if (userData == null || Object.keys(userData).length == 0) {
            if (status == 'authenticated') {
                setUserData(session?.user)
                _userData = session?.user
            }
        } else {
            _userData = userData
        }

        if (_userData != null && Object.keys(_userData).length != 0) {
            router.refresh()
        } else {
            setShowLoginModal(true)
            setLoading(false)
        }
    }

    async function logout() {
        setShowLogoutModal(true)
    }

    return (
        <>
            {buttonType == 0 && (
                <>
                    {loading ? (
                        <button
                            className='inline-flex w-full justify-center gap-x-1.5 rounded-md border border-[rgba(255,255,255,0.5)] px-3 py-2 text-sm font-semibold hover:border-[rgba(255,255,255,0.9)]'
                            disabled>
                            <p>Login</p>
                            {/*{whiteLoadingSvg}*/}
                        </button>
                    ) : (
                        <button
                            className='inline-flex w-full justify-center gap-x-1.5 rounded-md border border-[rgba(255,255,255,0.5)] px-3 py-2 text-sm font-semibold hover:border-[rgba(255,255,255,0.9)]'
                            onClick={login}>
                            {loginText}
                        </button>
                    )}
                </>
            )}
            {buttonType == 1 && (
                <>
                    {
                        <button
                            className='mx-auto my-auto mr-4 mt-1 inline-flex w-full justify-center gap-x-1.5 rounded-md text-sm font-semibold'
                            onClick={logout}>
                            <Image
                                className='h-8 w-auto rounded-full'
                                src={userData.image}
                                alt=''
                            />
                        </button>
                    }
                </>
            )}
        </>
    )
}
