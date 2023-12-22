import {IPost} from "@/app/blog/lib/types";
import TagWrapperPost from "@/app/blog/_component/card/tag_wrapper.post";


export default function PostCard(post: IPost) {
    //todo: refactor this card post code and style it
    const {postId, title, content, updatedAt, createdAt, read_time, review_average, cover_photo, category, tag} = post
    console.log(category)
    return (
        <div>
            <span>{category[0].category.designation}</span>
            <TagWrapperPost tags={tag} />
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-lg text-[#222]">{content}</p>
            <div className="w-full flex justify-between">
                <span>{read_time} min read</span>
                <div>
                    <span>Review: {review_average}</span>
                </div>
            </div>


        </div>
    )
}