import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import { auth, firestore } from "../Firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { login as authLogin } from "../store/authSlice";

const useLogin = () => {
  const dispatch = useDispatch(); // Access the dispatch function
  const showToast = useShowToast();

  const authState = useSelector((state) => state.auth);

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
        const userData = docSnap.data();

        // Dispatch the login action
        dispatch(authLogin(userData));
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { login, loading, error };
};

export default useLogin;
