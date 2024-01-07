import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setUserProfile } from "../store/userProfileSlice";
import useShowToast from "./useShowToast";
import { firestore } from "../Firebase/firebaseConfig";

const useGetUserProfileByUsername = (username) => {
  const [isLoading, setIsLoading] = useState(true);
  const showToast = useShowToast();
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfile);

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      try {
        const userRef = collection(firestore, "users");
        const q = query(userRef, where("username", "==", username));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          dispatch(setUserProfile(null));
        } else {
          querySnapshot.forEach((doc) => {
            const userData = doc.data();
            dispatch(setUserProfile(userData));
          });
        }
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
