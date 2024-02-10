import NextAuth , {AuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const api_base_url = "http://localhost:8080"
export const authOptions = {
    pages: {
        signIn: '/auth/login',
        signOut: '/auth/signout',
    },
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt({token, account, profile}){
            if(account && account.type=="credentials"){
                console.log(token)
            }
            return token
        },
        async session({ session, token, user}) {
            return session
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: true,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                try{
                    const res = await fetch(`${api_base_url}/api/v1/auth/login`, {
                        method: 'POST',
                        body: JSON.stringify(credentials),
                        headers: { "Content-Type": "application/json" }
                    })
                    const data = await res.json()
                    console.log(data)
                    if (data.statusCode == 201) {
                        return data.result.user
                    }
                    return null
                }catch (e) {
                     console.log(e)
                }


            }
        })
    ],
}
export const handler = NextAuth(authOptions as AuthOptions);
export {handler as GET, handler as POST}