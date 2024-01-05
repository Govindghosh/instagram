import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/firebaseConfig";
import useShowToast from "./useShowToast";
import { logout } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const dispatch = useDispatch();
  const [signOut, isLoggingOut, error] = useSignOut(auth);
  const showToast = useShowToast();
  const navigate = useNavigate();

  const handelLogout = async () => {
    try {
      await signOut();
      localStorage.removeItem("user-info");
      dispatch(logout());
      navigate("/");
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { handelLogout, isLoggingOut, error };
};

export default useLogout;
