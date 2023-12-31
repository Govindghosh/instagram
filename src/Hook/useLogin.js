import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import { auth, firestore } from "../Firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useSelector } from "react-redux";

const useLogin = () => {
  const loginUser = useSelector((state) => state.login);

  const showToast = useShowToast();
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const login = async (inputs) => {
    if (!inputs.email || !inputs.password) {
      return showToast("Error", "Please fill in all the details", "error");
    }
    try {
      const userCredentials = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (userCredentials) {
        const docRef = doc(firestore, "users", userCredentials.user.uid);
        const docSnap = await getDoc(docRef);
        localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
        loginUser(docSnap.data());
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { login, loading, error };
};

export default useLogin;
