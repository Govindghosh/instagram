// useGetUserProfileByUsername.js
import { useToast } from "@chakra-ui/react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserProfile } from "../store/userProfileSlice";
import { selectUserProfile } from "../store/userProfileSlice";
import { firestore } from "../Firebase/firebaseConfig";

const useGetUserProfileByUsername = (username) => {
  const [isLoading, setIsLoading] = useState(true);
  const showToast = useToast();
  const dispatch = useDispatch();
  const userProfile = useSelector(selectUserProfile);

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      try {
        const q = query(
          collection(firestore, "user"),
          where("username", "==", username)
        );
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty()) {
          dispatch(setUserProfile(null));
        } else {
          let userDoc;
          querySnapshot.forEach((doc) => {
            userDoc = doc.data();
          });
          dispatch(setUserProfile(userDoc));
          console.log(userDoc);
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
