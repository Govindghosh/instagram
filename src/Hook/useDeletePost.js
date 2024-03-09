import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost as decrementPost } from "../store/userProfileSlice";
import { deletePost as deletePostFromPostSlice } from "../store/postSlice";
import { ref, deleteObject } from "firebase/storage";
import { firestore, storage } from "../Firebase/firebaseConfig";
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import useShowToast from "./useShowToast";

const useDeletePost = (post) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const showToast = useShowToast();
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth.user);
  // const post = useSelector((state) => state.posts.posts);

  const deletePost = async () => {
    if (isDeleting) return;
    setIsDeleting(true);
    try {
      const imageRef = ref(storage, `posts/${post.id}`);
      await deleteObject(imageRef);
      const userRef = doc(firestore, "users", authUser.uid);
      await deleteDoc(doc(firestore, "posts", post.id));

      await updateDoc(userRef, {
        posts: arrayRemove(post.id),
      });
      dispatch(deletePostFromPostSlice(post.id));
      dispatch(decrementPost(post.id));
      showToast("Success", "Post deleted successfully", "success");
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsDeleting(false);
    }
  };

  return { isDeleting, deletePost };
};

export default useDeletePost;
