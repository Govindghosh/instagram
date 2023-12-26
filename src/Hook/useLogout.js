import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../Firebase/firebaseConfig';
import useShowToast from './useShowToast';

const useLogout = () => {
    const [signOut, isLoggingOut, error] = useSignOut(auth);
    const showToast = useShowToast();
    const handelLogout = async () =>{
        try {
            await signOut();
            localStorage.removeItem('user-info')
        } catch (error) {
            showToast("Error", error.message, "error")
        }
    }

  return {handelLogout, isLoggingOut, error}
}

export default useLogout
