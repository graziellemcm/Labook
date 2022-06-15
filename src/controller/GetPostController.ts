import { Request, Response } from 'express';
import { GetPostBusiness } from '../business/GetPostBusiness';
import { SignupInputDTO } from '../types/singupinputDTO';

const getpostBusiness = new GetPostBusiness()
export class GetPostController {
    getPost = async (req: Request, res: Response) => {


        try {
           
            const id = req.params.id


            const post = await getpostBusiness.getPost(id);

            res.status(200).send({ post });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

    }
}
  
