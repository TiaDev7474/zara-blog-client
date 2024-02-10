import ZaraLogo from "@/app/component/logo";
import LoginForm from "@/app/auth/_component/login.form";
import Image from "next/image";

export default function LoginPage() {
    return (
        <main className="w-full h-full dark:bg-background_dark  min-h-screen">
              <div className="w-full h-full flex ">
                  <div className="h-full w-1/2 p-4">
                      <ZaraLogo/>
                      <div className="mx-auto mt-52 max-w-[25rem]">
                          <LoginForm />
                      </div>
                  </div>
                  <div className=' h-[100vh] w-1/2 bg-gradient-to-br bg-primary to-primary '>
                  </div>
              </div>
        </main>

    )
}