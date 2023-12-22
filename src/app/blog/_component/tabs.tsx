import {useFetchCategory, useScrollTabs} from "../_hooks";
import Tab from "@/app/blog/_component/tab";
import NextIcon from "@/app/blog/_component/icons/next.icon";
import PrevIcon from "@/app/blog/_component/icons/prev.icon";

export default function Tabs() {
    const {data, isLoading, isSuccess} = useFetchCategory();

    const {
        scrollContainerRef ,
        showPrev ,
        showNext ,
        handlePrevClick ,
        handleNextClick
    } = useScrollTabs()
    return (
        <div className="relative">
            <div
                ref={scrollContainerRef}
                className="w-full pb-4  dark:border-gray-700 overflow-x-auto no-scrollbar scroll-smooth ">
                <ul className=" flex  -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 ">
                    {
                        isSuccess && (
                            data.data.result.map((category: { designation: string; id: number }) => (
                                    <Tab id={category.id} name={category.designation} key={category.id}/>
                                )
                            ))
                    }
                </ul>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-50">
                {showNext && <NextIcon onClick={handleNextClick} /> }
            </div>
            <div className=" absolute  left-0-0 top-1/2 -translate-y-1/2 z-50">
                {showPrev && <PrevIcon onClick={handlePrevClick} />}
            </div>
        </div>

    )
}