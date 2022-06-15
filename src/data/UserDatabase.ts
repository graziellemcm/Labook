import { post } from "../types/Post";
import { user } from "../types/User";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {

    insertUser = async (
        user: user
    ) => {
        await this.connection()
            .insert({
                id: user.id,
                email: user.email,
                name: user.name,
                password: user.password
            })
            .into("labook_users");
    }

    loginUser = async (
        email: string
    ): Promise<user> => {
        try {
            const result = await this.connection("labook_users")
                .select("*")
                .where({ email })
            return {
                id: result[0].id,
                email: result[0].email,
                name: result[0].name,
                password: result[0].password
            }
        } catch (error: any) {
            throw new Error(error.slqMessage || error.message);

        }
    }
    findUserByEmail = async (email: string
        ): Promise<user[]> => {
        try {
            const user = await this.connection('labook_users').select('*').where({email})
            return user[0];
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);

        }
    }
}