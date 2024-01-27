import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useShowToast from "./useShowToast";
import { storage, firestore } from "../Firebase/firebaseConfig";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { setUser } from "../store/authSlice";
import { setUserProfile } from "../store/userProfileSlice";

const useEditProfile = () => {
  const [isUploading, setIsUploading] = useState(false);
  const authUser = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const showToast = useShowToast();

  const editProfile = async (inputs, selectedFile) => {
    if (isUploading || !authUser) return;
    setIsUploading(true);
    const storageRef = ref(storage, `profilePics/${authUser.uid}`);
    const userDocRef = doc(firestore, "users", authUser.uid);
    let URL = "";
    try {
      if (selectedFile) {
        await uploadString(storageRef, selectedFile, "data_url");
        URL = await getDownloadURL(ref(storage, `profilePics/${authUser.uid}`));
      }
      const updatedUser = {
        ...authUser,
        fullName: inputs.fullName || authUser.fullName,
        bio: inputs.bio || authUser.bio,
        profilePicURL: URL || authUser.profilePicURL,
      };
      await updateDoc(userDocRef, updatedUser);
      localStorage.setItem("user-info", JSON.stringify(updatedUser));
      dispatch(setUser(updatedUser));
      dispatch(setUserProfile(updatedUser));
      showToast("Success", "Profile updated successfully", "success");
    } catch (error) {
      showToast("Error", `Profile update failed: ${error.message}`, "error");
    }
  };
  return { editProfile, isUploading };
};

export default useEditProfile;
