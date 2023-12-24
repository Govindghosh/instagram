import { Input, InputGroup, InputRightElement, Button, WrapItem } from '@chakra-ui/react';
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  const[inputs, setInputs]=useState({
    email:'',
    password:''
  });

  const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const handelLogin = ()=>{
      console.log("inputs", inputs)
      if (!inputs.email || !inputs.password) {
        alert("please enter you Email and Password");
      } else {
        navigate("/home")
        }
    };

  return (
    <>
      <Input 
                    label="Email"
                    value={Input.email}
                    onChange={(e)=>setInputs({...inputs,email:e.target.value})}
                    placeholder="Mobile Number or Email"
                    fontSize={14}/>
                 
                <InputGroup>
                <Input
                    label="Password" 
                    placeholder="Password"
                    type={show ? 'text' : 'password'}
                    fontSize={14}  // Corrected here
                    onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                />

                    <InputRightElement>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                     {show ? <IoIosEyeOff /> : <IoMdEye />}
                    </Button>
                    </InputRightElement>
                </InputGroup>
                <WrapItem>
                <Button className="w-64" colorScheme="linkedin" onClick={handelLogin}>
                  Log In
                </Button>
              </WrapItem>
    </>
  )
}

export default Login
