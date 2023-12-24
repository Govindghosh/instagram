import { Input, InputGroup, InputRightElement, Button, Box, WrapItem } from '@chakra-ui/react'
import React, { useState } from 'react';
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';




function Signup() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const handelSignup = ()=>{
      console.log("inputs", inputs)
      if (!inputs.email || !inputs.password) {
        alert("please enter you Email and Password");
      } else {
        navigate("/home")
        }
    };

    const [inputs, setInputs]=useState({
      fullName: "",
      username: "",
      email: "",
      password: ""
    })

  return (
    <>
      <Input 
                    type="email"
                    value={Input.email}
                    onChange={(e)=>setInputs({...inputs,email:e.target.value})}
                    placeholder="Mobile Number or Email"
                    fontSize={14}/>
                 <Input
                    type="text" 
                    placeholder="Username"
                    value={Input.username}
                    fontSize={14}  // Corrected here
                    onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                />
                <Input
                    type="text" 
                    placeholder="Full Name"
                    value={Input.fullName}
                    fontSize={14}  // Corrected here
                    onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                />
                <InputGroup>
                <Input
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    value={Input.password}

                    fontSize={14}  // Corrected here
                    onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                />

                    <InputRightElement>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                     {show ? <IoIosEyeOff /> : <IoMdEye />}
                    </Button>
                    </InputRightElement>
                </InputGroup>
                <Box
                className="text-sm text-gray-600 text-center"
                maxW={350}
                padding={2}
              >
                People who use our service may have uploaded your contact
                information to Instagram. Learn More
              </Box>
              <Box
                className="text-sm text-gray-600 text-center"
                maxW={350}
                padding={2}
              >
                By signing up, you agree to our Terms , Privacy Policy and
                Cookies Policy .
              </Box>
              <WrapItem>
                <Button className="w-64" colorScheme="linkedin"
                onClick={handelSignup}
                >
                  Sign Up
                </Button>
              </WrapItem>
    </>
  )
}

export default Signup
