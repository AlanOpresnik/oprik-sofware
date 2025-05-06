{/*import CredentialsProvider from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import Client from "@/models/Client";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt"; // Import the JWT type
import { Session } from "next-auth"; // Import the Session type

// Extending JWT type to include custom 'id' field
interface CustomJWT extends JWT {
  id?: string;
}

export const authOptions: NextAuthOptions = {
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
    // Callback to add the ID to the JWT token
    jwt({ token, user }: { token: CustomJWT; user?: { id: string } }) {
      if (user) {
        token.id = user.id; // Store the ID in the JWT token
      }
      return token;
    },

    // Callback to add the ID to the session.user object

    session({ session, token }: { session: Session; token: CustomJWT }) {
      // Make sure to keep the original properties of the session.user object
      session.user = {
        ...session.user,
        id: token.id as string, // Add the ID to the session user object//+
      }
      return session;
    },

  },
  pages: {
    signIn: "/login",
  },
};
*/}