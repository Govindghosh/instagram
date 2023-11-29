import conf from "../conf/conf";
import {ID, Client, Databases, Storage, Query} from "appwrite";

export class Service{
    client = new Client();
    databases;
    buckets;

    constructor(){
        this.client
            .setEndpoint(conf.Url)
            .setProject(conf.ProjectId);

            this.databases= new Databases(this.client);
            this.buckets= new Storage(this.client);
    }
async createPost({title, content, featuredImage, status, userId, slug}){
    try {
        return await this.databases.createDocument(
            conf.DatabaseId, conf.CollectionId,

            {title,
                content,
                featuredImage,
                status,
                userId})
    } catch (error) {
        console.log("appwrite-config : createPost : error: ", error);
    }
}
async updatePost(){
    
}


}
