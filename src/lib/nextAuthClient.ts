import { signIn } from "next-auth/react";

export async function loginIn({redirectPath}) {
    const result = await signIn('google', {
        callbackUrl: redirectPath
    })
}
