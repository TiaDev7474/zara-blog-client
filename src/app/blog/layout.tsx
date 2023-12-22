import {PropsWithChildren} from "react";
import Navbar from "@/app/component/navbar";


export default function Layout({ children }: PropsWithChildren) {
    return (
        <main className="min-h-screen w-full  bg-white dark:bg-background_dark">
            <Navbar />
            <div className="grid  grid-flow-col grid-cols-6 sm:grid-flow-col px-24">
                <section className="col-start-2 col-span-3">
                    { children }
                </section>
            </div>
        </main>
    )
}