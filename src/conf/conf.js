const conf={
    
    appwURL: String(import.meta.env.VITE_APPWRITE_URL),
    appwPrID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwDbID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwCollID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwBucID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)


}

export default conf;