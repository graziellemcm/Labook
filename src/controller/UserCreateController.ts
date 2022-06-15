
import { Request, Response } from 'express';
import { UserCreateBusiness } from '../business/UserCreateBusiness';
import { SignupInputDTO } from '../types/singupinputDTO';

const userBusiness = new UserCreateBusiness();
export class UserCreateController {
    signup = async (req: Request, res: Response) => {


        try {
            const {name, email, password} = req.body;
            const input: SignupInputDTO = {
                name,
                email,
                password
            }


            const token = await userBusiness.createUser(input.name, input.email, input.password);

            res.status(200).send({ token });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

    }
}