import {montserrat} from "@/app/_lib/font";
import SearchTopics from "@/app/component/search.topics";
import Navbar from "@/app/component/navbar";

export default function Home() {
  return (
    <main className="min-h-screen w-full -z-10  object-fill bg-no-repeat bg-white  bg-pattern dark:bg-blend-darken">
        <Navbar />
        <section className="z-50 pt-12">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 className={`${montserrat.className} mb-4 text-4xl font-extrabold tracking-normal leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white`}>
                    Ignite Brilliance, Inspire Change <br/>
                    <span className="block lg:inline">
                         Unleash the Power of Your Ideas with Zara
                    </span>
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                    Transform your ideas into action. Join Zara, where brilliance meets inspiration. Our platform empowers you to share, collaborate, and innovate. Discover a community that fuels change and amplifies your voice.
                </p>
                <SearchTopics />
            </div>
        </section>
    </main>
  )
}

