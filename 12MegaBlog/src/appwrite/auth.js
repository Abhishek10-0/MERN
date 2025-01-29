import config from '../config/config.js';
import {Client, Account, ID} from 'appwrite';

class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAcount({email, password,name}){

        try {
            const userAccount = await this.account.create( ID.unique ,email,password, name);
            if (userAccount) {
                return this.login({email, password});
            } else {
                return userAccount;
            }
            
        } catch (error) {
            throw error;
        }
    }
        


        async login({email, password}){
            try{
                return await this.account.createEmailPasswordSession(email, password);
            }catch(error){
                throw error;
            }
        }

        async getCurrentUser(){
            try{
                return await this.account.get();
            }catch(error){
                throw error;
            }
           
        }

        async logout(){
            try{
                return await this.account.deleteSession('current');
            }catch(error){
                throw error;
            }
        }


    }


// export default AuthService;  
// (isse use karne ke liye export karna padega or object banana padega)

const authService = new AuthService();

export default authService
//Har jagah object na banana pade isliye pahele object bana ke export default kar diya