import { PostDatabase } from "../data/PostDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator} from "../services/IdGenerator"
import { POST_TYPES } from "../types/Post";


const userDB = new PostDatabase();
const authenticator = new Authenticator();
const idGenerator = new IdGenerator();

export class PostCreateBusiness{
    createPost = async ( photo: string,description: string,type: POST_TYPES,created_at: Date,author_id: string) => {

        try{
            console.log(author_id)
            if(!photo || !description || !author_id){
                throw new Error("Por favor preencha os campos ");
            }

            if(!type){
                throw new Error("Type precisa ter o valor de 'normal'  ou 'event'");
            }


            const id = idGenerator.generateId();

            await userDB.createPost({id, photo, description, type, created_at,author_id});

            const token = authenticator.generateToken({id});

            return token;

        }catch(error: any){
            throw new Error( error.message || "Error creating user. Please check your system administrator.");
        }
    }
}