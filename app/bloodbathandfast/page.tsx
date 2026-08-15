import { RegisterForm } from "@/components/blocks/signup/block";
import { auth } from "@/lib/auth/auth";
import { requireUnAuth } from "@/lib/auth/auth-lib";

const submitForm = async (email: string, password: string, username: string) => {
    "use server"
    const data = { email, name: username, password, callbackURL: "/" }
    const response = await auth.api.signUpEmail({
        body: {
            ...data
        }
    })
}

export default async function BloodBathPage() {
    const session = await requireUnAuth()
    return (
        <RegisterForm onSubmit={submitForm} />
    )
}