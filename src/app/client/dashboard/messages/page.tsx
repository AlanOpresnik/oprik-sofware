import { getServerSession } from "next-auth"
import ChatComponent from "./(components)/ChatComponent"
import api from "@/api/api"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function Page() {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
        return <div className="mt-24 text-white">You must be logged in to access this page.</div>;
    }

    const user = await api.getOrderById(session.user.id);
    if (!user.data) return
    return (
        <div className="mt-8">
                <Link className="text-white" href={'/client/dashboard'}>{'<--'} Volver al Dashboard</Link>
            <div className=" flex flex-col items-center justify-center p-4">
                <ChatComponent messages={user.data?.client.order.dev_info.messages} />
                <div className="flex flex-col items-center">
                    <p className="text-white mt-6 mb-2">Tenes alguna duda?</p>
                    <button className="bg-primary font-semibold text-black p-2 rounded-xl">Contactate con Oprik software</button>
                </div>
            </div>
        </div>
    )
}

