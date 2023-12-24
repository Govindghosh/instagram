import { doc, setDoc } from "firebase/firestore"
import { auth, firestore } from "../Firebase/firebaseConfig"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"



const useSignupWithEmailAndPassword = () => {

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    const signup = async (inputs) => {
      if (!inputs.email || !inputs.username || !inputs.fullName || !inputs.password) {
        console.log("Please Enter Your Field");
        return;
      }
  
      try {
        const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
  
        if (!newUser && error) {
          console.log(error);
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
        }
      } catch (error) {
        console.log(error);
      }
    };
  

  return {
    signup,
    loading,
    error,
  }
}

export default useSignupWithEmailAndPassword;

