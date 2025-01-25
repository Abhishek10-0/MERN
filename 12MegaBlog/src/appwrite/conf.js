import config from '../config/config.js';
import {Client, ID, Databases, Storages, Query} from 'appwrite';


export class Service{
    client = new Client();
    database;
    bucket;


    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)  
        
        this.database = new Databases(this.client);
        this.bucket = new Storages(this.client);
    }

    async createPost({title,content, featuredImage , status , UserId }){
        try{
            return await this.database.createDocument(config.appwriteDatabaseId, config.appwriteCollectionId, ID.unique,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    UserId,
                    createdAt: Date.now()
                })

        }catch(error){
            throw error;
        }
    }
}


 const service = new Service();

 export default service;
