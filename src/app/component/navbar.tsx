"use client"
import Button from "@/app/component/button";
import {usePathname} from "next/navigation";
import ZaraLogo from "@/app/component/logo";
import {AuthButton} from "@/app/auth/_component/buttons";

export default function Navbar() {
    const url = usePathname();
    return (
        <nav>
            <div className="flex justify-between px-24 py-5">
                <ZaraLogo />
                <div className="inline-flex gap-3">
                    <AuthButton />
                </div>
            </div>
        </nav>
    )
}