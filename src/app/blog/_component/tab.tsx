"use client"
import {useParams , useSearchParams} from "next/navigation";
import {useState} from "react";
import clsx from "clsx";


export default function Tab({id, name}: {id: number, name: string}) {
    const searchParams = useSearchParams();

    const [filter, setFilter] = useState(searchParams.get('filter') ?? 'all');
    const handleTabClick = () => {
    }
    return (
        <li
            className="me-2 block whitespace-nowrap cursor-pointer"
            key={id}
        >
            <button

                className={clsx("inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",{
                "border-b-2 border-blue-500": filter.toLowerCase() == name.toLowerCase()
            })}
            >
                  {name}
            </button>
        </li>
    )
}