import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/lib/mongodb";
import Client from "@/models/Client";
import bcryptjs from 'bcryptjs'
import type { NextAuthOptions } from "next-auth"
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {

                email: { label: 'Email', type: 'email', placeholder: 'Enter your email' },
                password: { label: 'Password', type: 'password', placeholder: 'Enter your password' },
            },
            async authorize(credentials, req) {
                await connectDB()
                console.log(credentials)
                const clientFound = await Client.findOne({ email: credentials?.email })
                if (!clientFound) throw new Error('invalid credentials');
                const passwordMatch = await bcryptjs.compare(credentials!.password, clientFound.password)
                if (!passwordMatch) throw new Error('password mismatch')

                return clientFound
            },
        })
    ],
    callbacks: {
        jwt({ account, token, user, profile, session }) {

            if (user) token.user = user

            return token
        },
        session({ session, token }) {
            console.log(session, token)
            session.user = token.user as any
            return session
        }
    },
    pages: {
        signIn: '/login',

    }
})

export { handler as GET, handler as POST }