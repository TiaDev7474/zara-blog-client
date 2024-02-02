import NextAuth , {AuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const api_base_url = process.env.NODE_ENV =="development" ? "http://localhost:8080" : ""
export const authOptions = {
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const res = await fetch(`${api_base_url}/api/v1/auth/login`, {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const user = await res.json()
                if (res.ok && user) {
                    return user
                }
                return null
            }
        })
    ],
    session: {
        strategy: "jwt"
    }
}
export const handler = NextAuth(authOptions as AuthOptions);
export {handler as GET, handler as POST}