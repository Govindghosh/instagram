import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import { auth, firestore } from "../Firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const useLogin = () => {
  const showToast = useShowToast();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const login = async (inputs) => {
    if (!inputs.email || !inputs.password) {
      return showToast("Error", "Please filled all the details", "error");
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
      }
      //   if (docSnap.exists()) {
      //     console.log("Document data:", docSnap.data());
      //   } else {
      //     console.log("No such document!");
      //   }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };
};

export default useLogin;
