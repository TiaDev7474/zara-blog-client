import Button from "@/app/component/button";

export default function SearchTopics() {
    return (
        <form className="w-full max-w-lg mx-auto">
            <label htmlFor="default-email" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Email sign-up</label>
            <div className="relative">
                <input
                    type="search"
                    id="default-email"
                    className="block w-full p-5 ps-10 text-sm text-gray-900  rounded-lg bg-white focus:border-none focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                    placeholder="Search by topics..."
                    aria-autocomplete="none"
                    autoComplete="off"
                />
                <Button label="Search now" isLink={false} type="primary" style="absolute end-2.5 bottom-0 top-1.5" />
            </div>
        </form>
    )
}