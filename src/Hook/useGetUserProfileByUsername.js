import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"; // Import useSelector and useDispatch
import useShowToast from "./useShowToast";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../Firebase/firebaseConfig";
import { setUserProfile } from "../store/userProfileSlice";

const useGetUserProfileByUsername = (username) => {
  const [isLoading, setIsLoading] = useState(true);
  const showToast = useShowToast();
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfile.userProfile);

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
          dispatch(setUserProfile(null)); // Dispatch the setUserProfile action
          return;
        }

        let userDoc;
        querySnapshot.forEach((doc) => {
          userDoc = doc.data();
        });

        dispatch(setUserProfile(userDoc)); // Dispatch the setUserProfile action
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
