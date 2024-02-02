import {NextAuthConfig} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import {AuthCredentialsType} from "@/app/auth/_lib/types";
import {authService} from "@/app/auth/_services/auth.service";
import {JWT} from "@auth/core/jwt";

export  const authConfig: NextAuthConfig = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    return null;
                }
                const data = {
                    email: credentials.email,
                    password: credentials.password
                } as AuthCredentialsType
                const response = await authService.authenticate(data)
                if(response.data.status == 200) {
                    return response.data.result
                } else {
                    return  null
                }
            }
        })
    ],
    callbacks: {
        jwt: (token: JWT, user: User) => {
            if(user){
                token = { accessToken: user.access_token }
            }
            return token
        }
    }
}

