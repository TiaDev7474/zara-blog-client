import NextAuth, {DefaultSession , DefaultUser} from "next-auth";
import {DefaultJWT} from "next-auth/jwt";


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

/**
 * Usually contains information about the provider being used
 * and also extends `TokenSet`, which is different tokens returned by OAuth Providers.
 */
interface Account {}
/** The OAuth profile returned from your provider */
interface Profile {}
