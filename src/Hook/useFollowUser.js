import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import useShowToast from "./useShowToast";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../Firebase/firebaseConfig";

const useFollowUser = (userID) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const showToast = useShowToast();
  const authUser = useSelector((state) => state.auth.user);
  const setAuthUser = useSelector((state) => state.auth.setUser);
  const userProfile = useSelector((state) => state.userProfile.userProfile);

  const setUserProfile = useSelector(
    (state) => state.userProfile.setUserProfile
  );

  const handleFollowUser = async () => {
    setIsUpdating(true);
    try {
      const currentUserRef = doc(firestore, "users", authUser.uid);
      const userToFollowOrUnfollowRef = doc(firestore, "users", userID);
      console.log(
        `currentUserRef-:${currentUserRef}userToFollowOrUnfollowRef-:${userToFollowOrUnfollowRef}`
      );
      await updateDoc(currentUserRef, {
        following: isFollowing ? arrayRemove(userID) : arrayUnion(userID),
      });

      await updateDoc(userToFollowOrUnfollowRef, {
        following: isFollowing
          ? arrayRemove(authUser.uid)
          : arrayUnion(authUser.uid),
      });
      if (isFollowing) {
        setAuthUser({
          ...authUser,
          following: authUser.following.filter((uid) => uid !== userID),
        });
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
        setAuthUser({
          ...authUser,
          following: [...authUser.following, userID],
        });
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
        setIsUpdating(true);
      }
    } catch (error) {
      showToast("Error", error.message, "error");
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
