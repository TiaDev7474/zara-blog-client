"use client"
import Tabs from "@/app/blog/_component/tabs";
import {useFetchPostByCategory} from "../_hooks";
import {useSearchParams} from "next/navigation";
import {Podkova} from "next/dist/compiled/@next/font/dist/google";
import PostCard from "@/app/blog/_component/card/post.card";
import {IPost} from "@/app/blog/lib/types";


export default function Page() {
    const searchParams = useSearchParams();
    const category = searchParams.get('filter') ?? 'all'

    const {data, isSuccess} = useFetchPostByCategory(10, 0, category);
    return (
        <div>
            <Tabs />
            {
                data?.data && (
                    data.data.result.map((post: IPost) => (
                        <PostCard
                            key={post.postId + post.author_id}
                            postId={post.postId}
                            title={post.title}
                            content={post.content}
                            createdAt={post.createdAt}
                            updatedAt={post.updatedAt}
                            read_time={post.read_time}
                            author_id={post.author_id}
                            review_average={post.review_average}
                            category={post.category}
                            tag={post.tag}
                            reaction={post.reaction}
                            review={post.review} />
                    ))
                )
            }
        </div>
    )
}