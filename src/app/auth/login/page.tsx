import ZaraLogo from "@/app/component/logo";
import LoginForm from "@/app/auth/_component/login.form";

export default function Page() {
    return (
        <main className="w-full dark:bg-background_dark px-12 py-3 min-h-screen">
            <div className="w-32 text-white md:w-36">
                <ZaraLogo />
            </div>
            <div className="flex items-center justify-center md:h-screen ">
                <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                    <LoginForm />
                </div>
            </div>
        </main>

    )
}