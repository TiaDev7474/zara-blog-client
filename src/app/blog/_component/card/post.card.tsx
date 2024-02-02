import {IPost} from "@/app/blog/lib/types";
import TagWrapperPost from "@/app/blog/_component/card/tag_wrapper.post";
import Review from "@/app/blog/_component/review";


export default function PostCard(post: IPost) {
    //todo: refactor this card post code and style it
    const {postId, title, content, updatedAt, createdAt, read_time, review_average, cover_photo, category, tag} = post
    console.log(category)
    return (
        <div className="dark:text-white flex flex-col gap-3">
            <div className="text-secondary">
                <span>{category[0].category.designation} </span>
                <span className="text-grey text-sm ">{read_time} min read</span>
            </div>
            <TagWrapperPost tags={tag} />
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className=" text-grey">{content}</p>
            <div className="w-full flex justify-between">
                <div>
                   <Review />
                </div>
            </div>
        </div>
    )
}