import {ITag} from "@/app/blog/lib/types";

type TagProps = {
    tags: ITag[]
}

type TagItemProps = {
    tag: ITag
}
function TagItem({ tag }: TagItemProps) {
    return (
        <span
            key={tag.tagId + tag.postId}
            className="inline-block  gap-2 bg-gray-400 text-white rounded-full px-3  "
        >
            {tag.tag.designation}
        </span>
    )
}
export default function TagWrapperPost({tags}: TagProps) {
    return (
        <ul>
            {
                tags.length >  0 ? (
                    tags.map(tag => (
                       <TagItem tag={tag} key={tag.tagId + tag.postId}/>
                    ))
                ): null
            }
        </ul>
    )
}