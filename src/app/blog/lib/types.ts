export interface IPost {
    postId: string,
    title: string,
    content: string,
    createdAt: Date
    updatedAt: Date
    read_time: 10
    cover_photo?: string
    author_id: string
    review_average: number
    category : ICategory[]
    tag: ITag[]
    reaction: IReaction[]
    review: IReview[]
}

interface ICategory {
    post_id: string
    category_id: number
    category : {
        designation: string
    }

}
interface IReview {
    id: number
    weight: number
    post_id: string
    reviewer_id: string
}
interface IReaction {
    post_id: string
    reaction_id: number
    user_id: string
    reaction: {
        type: string
    }
}
export interface ITag {
    postId: string
    tagId: number
    tag: {
        designation: string
    }

}