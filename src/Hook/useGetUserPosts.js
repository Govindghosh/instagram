import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { setPosts } from "../store/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../Firebase/firebaseConfig";

const useGetUserPosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const showToast = useShowToast();
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfile);
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    const getPosts = async () => {
      if (!userProfile) return;
      setIsLoading(true);
      try {
        const q = query(
          collection(firestore, "posts"),
          where("createdBy", "==", userProfile.uid)
        );
        const querySnapshot = await getDocs(q);
        const posts = [];
        querySnapshot.forEach((doc) => {
          posts.push({ ...doc.data(), id: doc.id });
        });
        posts.sort((a, b) => b.createdAt - a.createdAt);
        dispatch(setPosts(posts));
      } catch (error) {
        showToast("Error", error.message, "error");
        dispatch(setPosts([]));
      } finally {
        setIsLoading(false);
      }
    };
    getPosts();
  }, [userProfile, dispatch, showToast]);

  return { isLoading, posts };
};

export default useGetUserPosts;
