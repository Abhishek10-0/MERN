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

    async createPost({title , slug, content, featuredImage , status , UserId }){
        try{
            return await this.database.createDocument(config.appwriteDatabaseId, config.appwriteCollectionId, ID.unique,
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    UserId,
                    // createdAt: Date.now()
                })

        }catch(error){
            console.log("Appwrite service :: createPost :: error", error);
        }

    }


    async updatePost(slug, {title , content, featuredImage , status }){

        try {
            return await this.database.updateDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug, {
                title,
                content,
                featuredImage,
                status
            }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
        }


    async deletePost(slug){   
        try {
            await this.database.deleteDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug);
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }


    async getPost(slug){
        try {
            return await this.database.getDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug);
        }catch(error){
            console.log("Appwrite service :: getPost :: error", error);
        }
    }

    
}


 const service = new Service();

 export default service;
