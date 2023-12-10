import { Box, VStack, Image, Input, Button, InputGroup, InputRightElement, WrapItem, Flex, Text } from '@chakra-ui/react'
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';




function AuthForm() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const[inputs, setInputs]=useState({
      email:'',
      password:''
    });
    const handelAuth = ()=>{
      console.log("inputs", inputs)
      if (!inputs.email || !inputs.password) {
        alert("please enter you Email and Password");
      } else {
        toast.success("Login Successful !");
        navigate("/home")
        }
    };
  return (
    <>
        <Box border={"1px solid gray"} padding={5} borderRadius={10}>
            <VStack >
                <Image src='/logo.png' alt='instaLogo' h={24} cursor={"pointer"}/>
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
                <Button className="w-64" colorScheme="linkedin" onClick={handelAuth}>
                  Log In
                </Button>
              </WrapItem>
                        {/* -------------------OR--------------- */}
                    <Flex alignItems={"center"} justifyContent={"center"} my={4} w={"full"} gap={2}>
                        <Box flex={2} h={"1px"} bg={"gray.400"}/>
                        <Text color={"black"}>OR</Text>
                        <Box flex={2} h={"1px"} bg={"gray.400"}/>
                    </Flex>
                    <Flex gap={1}>
                      <Image src='/facebook.png' alt='Facebook-icon' h={"20px"}/>
                      <Text className='text-sm text-sky-700 font-semibold'>Log in with Facebook</Text>
                    </Flex>
                    <Flex p={2}>
                      <Text className='text-sky-700 text-xs'>Forgot Password?</Text>
                    </Flex>
            </VStack>
            
        </Box>
        <Box border={"1px solid gray"} padding={5} borderRadius={0}>
            <Text p={1}>Don't have an account? <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >Sign Up</Link></Text>
            </Box>
    
    </>
  )
}

export default AuthForm
