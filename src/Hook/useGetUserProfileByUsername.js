import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setUserProfile } from "../store/userProfileSlice";

import useShowToast from "./useShowToast";
import { firestore } from "../Firebase/firebaseConfig";

const useGetUserProfileByUsername = (username) => {
  const [isLoading, setIsLoading] = useState(true);
  const showToast = useShowToast();

  const userProfile = useSelector((state) => state.userProfile);

  const dispatch = useDispatch();

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      try {
        const q = query(
          collection(firestore, "users"),
          where("username", "==", username)
        );
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) return dispatch(setUserProfile(null));

        let userDoc;
        querySnapshot.forEach((doc) => {
          userDoc = doc.data();
        });

        dispatch(setUserProfile(userDoc));
        console.log(userDoc);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };

    getUserProfile();
  }, [dispatch, username, showToast]);

  return { isLoading, userProfile };
};

export default useGetUserProfileByUsername;
