import {useQuery} from "react-query";
import {postService} from "@/app/blog/_services/post.service";
import {categoryService} from "@/app/blog/_services/category.service";
import {useEffect , useState} from "react";

export const useFetchCategory = () => {
    return useQuery({
        queryKey: ['category'],
        queryFn: () => postService.getAllCategoriesFollowedByUser()
    })
}

export const useFetchCategoryByDesignation = (query: string) => {
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
        queryKey: ['category', newQuery],
        queryFn: () => categoryService.searchCategoryByDesignation(newQuery)
    })
}