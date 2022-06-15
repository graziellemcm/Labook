import { PostDatabase } from "../data/PostDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";


const postDB = new PostDatabase();
const hashManager = new HashManager();
const authenticator = new Authenticator();

export class GetPostBusiness {
    getPost = async (id: string) => {
        try {
            
            const post = await postDB.getPost(id)
            if (!post) {
                throw new Error("ID inválido")
            }
            return post


        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}