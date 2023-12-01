import React from 'react'
import authService from '../../appwrite/auth'
import { useDispatch } from 'react-redux'
import {logout} from '../../store/authSlice'
import { toast } from 'react-toastify'



const LogoutBtn = () => {
    const dispatch = useDispatch();
    const logoutHandler = ()=> {
        authService.logout().then(()=>{
            dispatch(logout());
            toast.success("Logout Successfully Done 👌")
        })
    }


  return (
    <button
    onClick={logoutHandler}
    >
        Switch
    </button>
  )
}

export default LogoutBtn
