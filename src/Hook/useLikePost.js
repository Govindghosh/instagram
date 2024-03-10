import { useState } from "react";
import useShowToast from "./useShowToast";
import { useSelector } from "react-redux";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../Firebase/firebaseConfig";

const useLikePost = (post) => {
  const showToast = useShowToast();
  const authUser = useSelector((state) => state.auth.user);
  const [likes, setLikes] = useState(post.likes ? post.likes.length : 0);
  const [isLiked, setIsLiked] = useState(
    post.likes ? post.likes.includes(authUser?.uid) : false
  );
  const [isUpdating, setIsUpdating] = useState(false);

  const handleLikePost = async () => {
    if (isUpdating) return;
    if (!authUser) return showToast("Error", "You Must Login", "error");

    setIsUpdating(true);
    try {
      const postRef = doc(firestore, "posts", post.id);
      await updateDoc(postRef, {
        likes: isLiked ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid),
      });

      // Update likes count and isLiked state based on the toggled status
      setLikes(isLiked ? likes - 1 : likes + 1);
      setIsLiked(!isLiked);
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsUpdating(false);
    }
  };

  return { isLiked, likes, handleLikePost, isUpdating };
};

export default useLikePost;
