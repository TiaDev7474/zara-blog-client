import {useEffect, useRef, useState} from "react";


export const  useScrollTabs = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showNext, setShowNext] = useState<boolean>(false);
    const [showPrev, setShowPrev] = useState<boolean>(false);

    const handleNextClick = () => {
        if (scrollContainerRef.current) {
            const containerWidth = scrollContainerRef.current.clientWidth;
            const newScrollPosition = scrollPosition + containerWidth;
            scrollContainerRef.current.scrollLeft = newScrollPosition;
            setScrollPosition(newScrollPosition)

        }
    }
    const  handlePrevClick = () => {
        if(scrollContainerRef.current) {
            const containerWidth = scrollContainerRef.current.clientWidth;
            const newScrollPosition = scrollPosition - containerWidth;
            scrollContainerRef.current.scrollLeft = newScrollPosition;
            setScrollPosition(newScrollPosition)
        }
    }
    useEffect(() => {
        const container = scrollContainerRef.current;

        if (container) {
            const isScrolledLeft = container.scrollLeft > 0
            const isOverflowing = container.scrollWidth >= container.clientWidth;
            setShowNext(isOverflowing);
            setShowPrev(isScrolledLeft);
        }
    }, [scrollPosition]);
    return {
        scrollContainerRef,
        showNext,
        showPrev,
        handleNextClick,
        handlePrevClick
    }
}