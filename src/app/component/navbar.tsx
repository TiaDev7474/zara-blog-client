"use client"
import {montserrat} from "@/app/_lib/font";
import Button from "@/app/component/button";
import {usePathname} from "next/navigation";
import Image from "next/image";

export default function Navbar() {
    const url = usePathname();
    console.log(url)
    return (
        <nav>
            <div className="flex justify-between px-24 py-5">
                <Image
                    src="/logo-dark.png"
                    alt="zara's logo brand"
                    width={120}
                    height={120}

                />
                <div className="inline-flex gap-3">
                    <Button label="login" isLink={true} to="/auth/login" type="outlined" />
                    <Button label="Get Started" isLink={true}  to="/blog" type="secondary"/>
                </div>
            </div>
        </nav>
    )
}