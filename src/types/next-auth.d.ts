import NextAuth, {DefaultSession , DefaultUser} from "next-auth";


declare  module "next-auth" {
    interface Session {
        user: {
            access_token: string;
            firstname?: string;
            lastname?: string
            id: string
        } & DefaultSession['user']
    }
}

interface User {}
/**
 * Usually contains information about the provider being used
 * and also extends `TokenSet`, which is different tokens returned by OAuth Providers.
 */
interface Account {}
/** The OAuth profile returned from your provider */
interface Profile {}