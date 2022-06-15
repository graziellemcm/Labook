import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator} from "../services/IdGenerator"


const userDB = new UserDatabase();
const hashManager = new HashManager();
const authenticator = new Authenticator();
const idGenerator = new IdGenerator();

export class UserCreateBusiness{
    createUser = async (name: string, email: string, password: string) => {

        try{

            if(!name || !email || !password ){
                throw new Error("Por favor preencha os campos ");
            }

            if(email.indexOf("@") === -1){
                throw new Error("Invalid Email");
            }

            if(password.length < 6){
                throw new Error("Password must have at least 6 characters");
            }
            const user = userDB.findUserByEmail(email);

            if (await user) {
                throw new Error("Email já cadastrado")
            }
            const id = idGenerator.generateId();

            const newhashPassword = await hashManager.hash(password);

            await userDB.insertUser({id, email, name, password: newhashPassword});

            const token = authenticator.generateToken({id});

            return token;

        }catch(error: any){
            throw new Error( error.message || "Error creating user. Please check your system administrator.");
        }
    }
}