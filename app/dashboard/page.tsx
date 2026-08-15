import { auth } from "@/lib/auth/auth";
import { requireAuth } from "@/lib/auth/auth-lib";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => {
    const session = await requireAuth()

    return <div>page</div>;
};

export default Page;