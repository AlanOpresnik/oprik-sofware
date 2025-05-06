{/*import { NextResponse } from "next/server";
import Client from "@/models/Client"
import bcrypt from 'bcryptjs'
import { connectDB } from "@/lib/mongodb";
export async function POST(request: Request) {
    const { email, password, name } = await request.json()
    console.log(email, password, name)
    if (!password || password.length < 4) return NextResponse.json({ message: 'password debe tener como minimo 4 letras' }, {
        status: 400
    })
    try {
        await connectDB()
        const ClientFound = await Client.findOne({ email })
        if (ClientFound) return NextResponse.json({ message: "este Correo ya existe" }, {
            status: 400
        })

        const hashedPassword = await bcrypt.hash(password, 10)

        const client = new Client({ email, password: hashedPassword, name })
        const savedClient = await client.save()
        console.log(savedClient)
        return NextResponse.json(savedClient)
    } catch (error) {
        console.log(error)
        if (error instanceof Error) {
            return NextResponse.json({ message: error.message }, {
                status: 500
            })
        }

    }

}
*/}