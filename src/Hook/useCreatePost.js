import { useSelector, useDispatch } from "react-redux";
import useShowToast from "./useShowToast";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { firestore, storage } from "../Firebase/firebaseConfig";
import { addPost } from "../store/userProfileSlice";
import { getDownloadURL, uploadString, ref } from "firebase/storage";
import { useState } from "react";
import { createPost } from "../store/postSlice";

const useCreatePost = () => {
  const dispatch = useDispatch();
  const showToast = useShowToast();
  const [isLoading, setIsLoading] = useState(false); // Correct initialization
  const authUser = useSelector((state) => state.auth.user);
  
  

  const handleCreatePost = async (selectedFile, caption) => {
    if (isLoading) return;
    if (!selectedFile) throw new Error("Please select an image");
    setIsLoading(true);
    const newPost = {
      caption: caption,
      likes: [],
      comments: [], // corrected "Comments" to "comments"
      createdBy: authUser.uid,
      createAt: formatDate(Date.now()),
    };
    try {
      const postDocRef = await addDoc(collection(firestore, "posts"), newPost);
      const userDocRef = doc(firestore, "users", authUser.uid);
      const imageRef = ref(storage, `posts/${postDocRef.id}`);
      await updateDoc(userDocRef, { posts: arrayUnion(postDocRef.id) });
      await uploadString(imageRef, selectedFile, "data_url");
      const downloadURL = await getDownloadURL(imageRef);
      await updateDoc(postDocRef, { imageURL: downloadURL });

      newPost.imageURL = downloadURL;
      dispatch(createPost({ ...newPost, id: postDocRef.id }));
      dispatch(addPost({ ...newPost, id: postDocRef.id }));
      showToast("Success", "Post Created successfully", "success");
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, handleCreatePost };
};

export default useCreatePost;
function formatDate(timestamp) {
  const currentDate = new Date(timestamp);

  // Get components of the date
  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const year = currentDate.getFullYear().toString().slice(-2);
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const seconds = currentDate.getSeconds().toString().padStart(2, '0');
  const milliseconds = currentDate.getMilliseconds().toString().padStart(3, '0');

  // Format the date string
  return `${day}-${month}-${year}, ${hours}:${minutes}:${seconds}.${milliseconds}`;}