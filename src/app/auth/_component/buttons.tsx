"use client";

import {signIn , signOut , useSession} from "next-auth/react";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export const LoginButton = () => {
    return (
       <Button  type="button" variant="default"  onClick={() => signIn()}>
           Login
       </Button>
    );
};


export const LogoutButton = () => {
    return (
        <Button  variant={"outline"} onClick={() => signOut()}>
            Log out
        </Button>
    );
};


export const AuthButton= () => {
    const session = useSession()
    console.log('session', session.data?.user)
    if(!session.data) return <LoginButton />
    return <LogoutButton />
}