import { doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../Firebase/firebaseConfig";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import authSlice from "../store/authSlice";



const useSignupWithEmailAndPassword = () => {
    const loginUser = authSlice((state)=> state.login);
    const logoutUser = authSlice((state)=> state.logout);
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const showToast = useShowToast()
    const signup = async (inputs) => {
      if (!inputs.email || !inputs.username || !inputs.fullName || !inputs.password) {
        showToast("Error", "Please fill all the fields", "error");
        return;
      }
  
      try {
        const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
  
        if (!newUser && error) {
          showToast("Error", error, "error");
          return;
        }
  
        if (newUser) {
          const userDoc = {
            uid: newUser.user.uid,
            email: inputs.email,
            username: inputs.username,
            fullName: inputs.fullName,
            bio: "",
            profilePicURL: "",
            followers: [],
            following: [],
            posts: [],
            createAt: Date.now(),
          };
  
          await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
          localStorage.setItem("user-info", JSON.stringify(userDoc));
          loginUser
        }
      } catch (error) {
        showToast("Error", error.message, "error")
      }
    };
  

  return {
    signup,
    loading,
    error,
  }
}

export default useSignupWithEmailAndPassword;

