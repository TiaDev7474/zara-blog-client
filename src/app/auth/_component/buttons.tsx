"use client";

import {signIn , signOut , useSession} from "next-auth/react";
import Link from "next/link";
import Button from "@/app/component/button";

export const LoginButton = () => {
    return (
       <Button isLink={false} type={"secondary"} actionType={"submit"} label={'Log in'}  onClick={() => signIn()}/>
    );
};


export const LogoutButton = () => {
    return (
        <Button isLink={false} type={"secondary"} actionType={"submit"} label={'Log out'}  onClick={() => signOut()}/>
    );
};


export const AuthButton= () => {
    const session = useSession()
    console.log(session.data)
    if(!session.data) return <LoginButton />
    return <LogoutButton />
}