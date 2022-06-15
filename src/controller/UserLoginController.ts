import { Request, Response } from "express";
import { UserLoginBusiness } from "../business/UserLoginBusiness";
import { LoginInputDTO } from "../types/logininputDTO";

const userBusiness = new UserLoginBusiness();

export class UserLoginController{
     login = async (req: Request, res: Response): Promise<void> =>{

        try {

            const {email, password} = req.body;
            const input: LoginInputDTO = {
                email,
                password
            }
            
            const token = await userBusiness.login(input.email, input.password);
            
            res.status(200).send({message: "Usuário logado", token });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

    }
}