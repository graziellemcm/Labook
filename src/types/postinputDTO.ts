import { POST_TYPES } from "./Post"


export type PostInputDTO = {
    photo: string,
    description: string,
    type: POST_TYPES,
    created_at: Date,
    author_id: string
}