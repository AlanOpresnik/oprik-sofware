import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import Client from "@/models/Client";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                await connectDB();
                const clientFound = await Client.findOne({ email: credentials?.email });
                if (!clientFound) throw new Error("Invalid credentials");
                const passwordMatch = await bcryptjs.compare(credentials!.password, clientFound.password);
                if (!passwordMatch) throw new Error("Password mismatch");

                return {
                    id: clientFound._id.toString(), // Convertir el ObjectId a string
                    email: clientFound.email,
                    name: clientFound.name,
                };
            },
        }),
    ],
    callbacks: {
        // Callback para añadir el ID al token JWT
        jwt({ token, user }) {
            if (user) {
                token.id = user.id; // Guardar el ID en el token JWT
            }
            return token;
        },
        // Callback para añadir el ID al objeto session.user
        session({ session, token }) {
            session.user = {
                ...session.user,
                id: token.id, // Añadir el ID al objeto `session.user`
            };
            return session;
        },
    },
    pages: {
        signIn: "/login",
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
