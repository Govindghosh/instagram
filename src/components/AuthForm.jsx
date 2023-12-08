import { Box, VStack, Image, Input, Button, InputGroup, InputRightElement } from '@chakra-ui/react'
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import React, { useState } from 'react'




function AuthForm() {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
  return (
    <>
        <Box border={"1px solid gray"} padding={5} borderRadius={15}>
            <VStack>
                <Image src='/logo.png' alt='instaLogo' h={24} cursor={"pointer"}/>
                <Input 
                    placeholder="Email"
                    fontsize={14}
                />
                <InputGroup>
                <Input 
                    placeholder="Password"
                    type={show ? 'text' : 'password'}
                    fontsize={14}
                    
                />
                    <InputRightElement>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                     {show ? <IoIosEyeOff /> : <IoMdEye />}
                    </Button>
                    </InputRightElement>
                </InputGroup>
                
                    
            </VStack>
        </Box>
    
    </>
  )
}

export default AuthForm
