import conf from '../conf/conf'
import { Client, ID, Account } from 'appwrite';

export class AuthService  {
    Client= new Client();
    account;

    constructor(){
        this.Client
            .setEndpoint(conf.Url)
            .setProject(conf.ProjectId);
            this.account=new Account(this.Client);
    }
    async createAccount({email, name, password, phone}){
        try {
            const userAccount = await this.account.createPhoneSession(ID.unique(), email, password, name, phone);
            if (userAccount) {
                return this.login(email, password);
            } else {
                return userAccount;
            }
            
        } catch (error) {
            throw error;
        }
    };
    async login(email, password){
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error; 
        }
    };
    async logout(){
        try {
            await this.account.deleteSession();
        } catch (error) {
            console.log("appwrite-auth : logout : error: ", error);
        }
    };
    async getCurrentUser(){
        try {
           return await this.account.get();
        } catch (error) {
            console.log("appwrite-auth : getCurrentUser : error: ", error);
        }
    };
    async passwordRecovery(email, phone){
        try {
            
        } catch (error) {
            
        }
    };
};
