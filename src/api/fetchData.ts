'use server'

export async function addEmail(email: string) {
    const mail_base = process.env.USER_EMAIL_SECRET;
    await fetch(mail_base + '/addEmail?email=' + email, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

}