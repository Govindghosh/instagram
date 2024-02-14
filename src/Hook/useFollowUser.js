import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useShowToast from "./useShowToast";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../Firebase/firebaseConfig";
import { setUserProfile } from "../store/userProfileSlice";
import { setUser as setAuthUser } from "../store/authSlice";

useDispatch;
const useFollowUser = (userID) => {
  const dispatch = useDispatch();
  const [isUpdating, setIsUpdating] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const showToast = useShowToast();
  const authUser = useSelector((state) => state.auth.user);
  const userProfile = useSelector((state) => state.userProfile.userProfile);

  const handleFollowUser = async () => {
    setIsUpdating(true);
    try {
      const currentUserRef = doc(firestore, "users", authUser.uid);
      const userToFollowOrUnfollowRef = doc(firestore, "users", userID);
      await updateDoc(currentUserRef, {
        following: isFollowing ? arrayRemove(userID) : arrayUnion(userID),
      });

      await updateDoc(userToFollowOrUnfollowRef, {
        followers: isFollowing
          ? arrayRemove(authUser.uid)
          : arrayUnion(authUser.uid),
      });
      if (isFollowing) {
        dispatch(
          setAuthUser({
            ...authUser,
            following: authUser.following.filter((uid) => uid !== userID),
          })
        );
        if (userProfile)
          setUserProfile({
            ...userProfile,
            followers: userProfile.followers.filter(
              (uid) => uid !== authUser.uid
            ),
          });
        localStorage.setItem(
          "user-info",
          JSON.stringify({
            ...authUser,
            following: authUser.following.filter((uid) => uid !== userID),
          })
        );
        setIsFollowing(false);
      } else {
        dispatch(
          setAuthUser({
            ...authUser,
            following: [...authUser.following, userID],
          })
        );
        if (userProfile)
          setUserProfile({
            ...userProfile,
            followers: [...userProfile.followers, authUser.uid],
          });
        localStorage.setItem(
          "user-info",
          JSON.stringify({
            ...authUser,
            following: [...authUser.following, userID],
          })
        );
        setIsFollowing(true);
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsUpdating(false);
    }
  };

  useEffect(() => {
    if (authUser) {
      const isFollowing = authUser.following.includes(userID);
      setIsFollowing(isFollowing);
    }
  }, [authUser, userID]);
  return { isUpdating, isFollowing, handleFollowUser };
};

export default useFollowUser;
