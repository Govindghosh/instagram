import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { setUser, setLoading, setError } from "../store/authSlice";

const useLogin = () => {
  const dispatch = useDispatch();

  const login = async (email, password) => {
    try {
      dispatch(setLoading(true));
      const userCredential = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential.user;
      dispatch(setUser(user));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { login };
};

export default useLogin;
