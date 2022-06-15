import { Request, Response } from "express";
import { PostCreateBusiness } from "../business/PostCreateBusiness";
import { UserCreateBusiness } from "../business/UserCreateBusiness";
import { PostInputDTO } from "../types/postinputDTO";

const postBusiness = new PostCreateBusiness()

export class PostCreateController{
     createPost = async (req: Request, res: Response): Promise<void> =>{

        try {

            const {photo, description, type, created_at,author_id} = req.body;
            const input: PostInputDTO = {
                photo,
                description,
                type,
                created_at,
                author_id
            }
  
            const token = await postBusiness.createPost(input.photo, input.description, input.type, input.created_at, input.author_id);

            res.status(200).send({ token });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

    }
}