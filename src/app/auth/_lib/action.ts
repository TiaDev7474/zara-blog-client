import {OAuthCallbackError} from "next-auth/core/errors";
import {signIn} from "next-auth/react";


export async function authenticate(
    prevState: string | undefined,
    formData: FormData
){
    try {
        await signIn('credentials', formData)
        console.log(formData)
    }catch (error){
    }
}