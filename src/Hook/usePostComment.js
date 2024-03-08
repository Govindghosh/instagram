import { useState } from "react";
import useShowToast from "./useShowToast";
import { useSelector } from "react-redux";
import { updateDoc, doc, arrayUnion } from "firebase/firestore";
import { firestore } from "../Firebase/firebaseConfig";
import { addComment } from "../store/postSlice";

const usePostComment = () => {
  const [isCommenting, setIsCommenting] = useState(false);
  const showToast = useShowToast();
  const authUser = useSelector((state) => state.auth.user);

  const handlePostComment = async (postId, commentText) => {
    if (isCommenting) return;
    if (!authUser) return showToast("Error", "You must log in", "error");

    setIsCommenting(true);

    const newComment = {
      comment: commentText,
      createdAt: Date.now(),
      createdBy: authUser.uid,
      postId,
    };

    try {
      await updateDoc(doc(firestore, "posts", postId), {
        comments: arrayUnion(newComment),
      });

      addComment(postId, newComment);
      //   showToast("Success", "Comment posted successfully", "success");
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsCommenting(false);
    }
  };

  return { handlePostComment, isCommenting };
};

export default usePostComment;
