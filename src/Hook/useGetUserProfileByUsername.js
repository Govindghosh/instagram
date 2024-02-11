import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../Firebase/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { setUserProfile } from "../store/userProfileSlice";

const useGetUserProfileByUsername = (username) => {
  const [isLoading, setIsLoading] = useState(true);
  const showToast = useShowToast();
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfile);

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      try {
        const q = query(
          collection(firestore, "users"),
          where("username", "==", username)
        );
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          
          dispatch(setUserProfile(null));
        } else {
          const userDoc = querySnapshot.docs[0].data();
          dispatch(setUserProfile(userDoc));
          
        }
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };

    if (username) {
      getUserProfile();
    } else {
      setIsLoading(false);
    }
  }, [username, showToast, dispatch]);

  return { isLoading, userProfile };
};

export default useGetUserProfileByUsername;
