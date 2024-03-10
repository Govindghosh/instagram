import { useEffect, useState } from "react";
import useShowToast from "../Hook/useShowToast";
import { useDispatch, useSelector } from "react-redux";
import { setUserProfile } from "../store/userProfileSlice";
import { setPosts } from "../store/postSlice";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../Firebase/firebaseConfig";
const useFeedPosts = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const showToast = useShowToast();
  const authUser = useSelector((state) => state.auth.user);
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    const getFeedPost = async () => {
      setIsLoading(true);
      if (authUser.following.length === 0) {
        setIsLoading(false);
        dispatch(setPosts([]));
        return;
      }
      const q = query(
        collection(firestore, "posts"),
        where("createdBy", "in", authUser.following)
      );
      try {
        const querySnapshot = await getDocs(q);
        const feedPosts = [];
        querySnapshot.forEach((doc) => {
          feedPosts.push({ id: doc.id, ...doc.data() });
        });
        feedPosts.sort((a, b) => b.createAt - a.createAt);
        dispatch(setPosts(feedPosts));
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };
    if (authUser) getFeedPost();
  }, [authUser, showToast, setPosts, setUserProfile]);

  return { isLoading, posts };
};

export default useFeedPosts;
