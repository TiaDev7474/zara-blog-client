import {useQuery} from "react-query";
import {tagService} from "@/app/blog/_services/tag.service";
import {useEffect , useState} from "react";


export const useFetchTagsByDesignation = (query: string) => {
    const [newQuery, setNewQuery] = useState<string>("")
    useEffect(() => {
        if(query.toLowerCase() !== newQuery.toLowerCase()) {
            const timerId = setTimeout(
                () => setNewQuery(query),
                800
            )
            return () => clearTimeout(timerId);
        }
    } , [query]);
    return useQuery({
        queryKey: ['tags', newQuery],
        queryFn: () => tagService.getTagsByDesignation(newQuery)
    })
}