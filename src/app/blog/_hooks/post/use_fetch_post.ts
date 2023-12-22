
import { useQuery } from "react-query";
import {postService} from "@/app/blog/_services/post.service";


export  const useFetchPostByCategory= (per_page: number, current_page: number, category: string) => {
    return  useQuery({
        queryKey: ['post', category],
        queryFn: () => postService.getAllByCategories(per_page, current_page, category)
    })
}