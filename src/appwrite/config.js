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
async updatePost(title, content, featuredImage){
    try {
        return await this.databases.updateDocument(
            conf.DatabaseId, conf.CollectionId, slug,{
                title,
                content,
                featuredImage
            });
    } catch (error) {
        console.log("appwrite-config : updatePost : error: ", error);
    }
}
async deletePost(slug){
    try {
        await this.databases.deleteDocument(
            conf.DatabaseId,
            conf.CollectionId, 
            slug);
            return true;
    } catch (error) {
        console.log("appwrite-config : deletePost : error: ", error);
    }
};
async getPost(slug){
    try {
        return await this.databases.getDocument(
        conf.DatabaseId, 
        conf.CollectionId, 
        slug);
        
    } catch (error) {
        console.log("appwrite-config : getPost : error: ", error);
    }
};
//async getPosts(){};
//file upload
async uploadFile(file){
    try {
        return await this.buckets.createFile(
            conf.BucketId,
            ID.unique(),
            file);
    } catch (error) {
        console.log("appwrite-config : uploadFile : error: ", error);
    }
};
async deleteFile(fileID){
    try {
        await this.buckets.deleteFile(
        conf.BucketId, 
        fileID);
        return true;
    } catch (error) {
        console.log("appwrite-config : deleteFile : error: ", error);
    }
};
async getFilePreview(fileID){
    try {
        return await this.buckets.getFilePreview(
            conf.BucketId, 
            fileID);
    } catch (error) {
        console.log("appwrite-config : getFilePreview : error: ", error);
    }
};


}
const  service = new Service();
export default service;