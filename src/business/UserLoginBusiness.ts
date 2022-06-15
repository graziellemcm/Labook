import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

const userDB = new UserDatabase();
const hashManager = new HashManager();
const authenticator = new Authenticator();
const idGenerator = new IdGenerator();


export class UserLoginBusiness {

     login = async (email:string, password: string) => {

        
        const userFromDB = await userDB.loginUser(email);
        
        const hashCompare = await hashManager.compare(password, userFromDB.password);

        const accessToken = authenticator.generateToken({ id: userFromDB.id});

        if (!hashCompare) {
            throw new Error("Senha inválida!");
        }

        return accessToken;
    }
}