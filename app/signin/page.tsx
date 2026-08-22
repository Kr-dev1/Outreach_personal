import { SignInForm } from "@/components/blocks/signin/block"
import { auth } from "@/lib/auth/auth"
import { requireUnAuth } from "@/lib/auth/auth-lib"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

const submitForm = async (email: string, password: string) => {
    "use server"
    const data = await auth.api.signInEmail({
        body: {
            email: email,
            password: password,
        },
        headers: await headers(),
    })
    if (data.user) {
        redirect("/overview")
    }
}


export default async function SignIn() {
    await requireUnAuth()
    return (
        <SignInForm onSubmit={submitForm} />
    )
}