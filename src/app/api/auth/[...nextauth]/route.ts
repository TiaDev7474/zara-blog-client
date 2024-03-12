import NextAuth , {AuthOptions , DefaultSession , DefaultUser , NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github"
import {DefaultJWT} from "next-auth/jwt";
const api_base_url = "https://localhost:8080/api/v1"

declare  module "next-auth" {
    interface Session {
        user: {
            access_token: string;
            firstname?: string;
            lastname?: string
            id: string
        } & DefaultSession['user']
    }
    interface User extends  DefaultUser{
        firstname?: string;
        lastname?: string;
        access_token: string
    }
}

declare module "next-auth/jwt"{
    interface JWT extends  DefaultJWT{
        access_token: string;
    }
}

export const authOptions: NextAuthOptions = {
    callbacks: {
        async signIn({user, account, profile}) {
            console.log("user at signin :", user);
            console.log("account at signin:", account);
            console.log("profile at signin", profile);
            /*if(account.provider == "github"){
                const data = {
                    email: profile.email,
                    provider_name: profile.
                }
                const res = await fetch(`${api_base_url}/auth/login`, {
                    method: 'POST',
                    body: JSON.stringify(user),
                    headers: { "Content-Type": "application/json" }
                })
            }*/
            user.access_token = "blablabla"
            return true;

        },
        async jwt({token, user}){

            /*if(user){
                token.access_token = user.access_token
                token.firstanme = user.firstanme
                token.lastname = user.lastname
            }*/
            if(user){
                token.access_token = user.access_token
            }

            console.log("user at jwt :", user);
            console.log("token at jwt :", user);
            return token
        },
        async session({session, token}) {
           /* if(session.user){
                session.user.access_token = token.access_token;
                session.user.firstanme = token.firstanme
                session.user.lastname = token.lastname

            }*/
            if(token && session.user){
                session.user.access_token = token.access_token
            }

           return session
        }
    },
    secret: process.env.NEXTAUTH_SECRET!,
    debug: true,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
            profile(profile){
                return {
                    ...profile,
                }
            }

        }),
        CredentialsProvider({
            id:"login",
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                try{
                    const res = await fetch(`${api_base_url}/auth/login`, {
                        method: 'POST',
                        body: JSON.stringify(credentials),
                        headers: { "Content-Type": "application/json" }
                    })
                    console.log(res);
                    const data = await res.json()
                    return data.result.user
                }catch (e: any) {
                     throw  new Error(e.message)
                }
            }
        })
    ],
}
export const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}
