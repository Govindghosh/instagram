import { Box, VStack, Image, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';
import FacebookAuth from './FacebookAuth';




function AuthForm() {
    
  return (
    <>
        <Box border={"1px solid gray"} padding={5} borderRadius={10}>
            <VStack >
                <Image src='/logo.png' alt='instaLogo' h={24} cursor={"pointer"}/>
                <Login />
                        {/* -------------------OR--------------- */}
                    <Flex alignItems={"center"} justifyContent={"center"} my={4} w={"full"} gap={2}>
                        <Box flex={2} h={"1px"} bg={"gray.400"}/>
                        <Text color={"black"}>OR</Text>
                        <Box flex={2} h={"1px"} bg={"gray.400"}/>
                    </Flex>
                    <FacebookAuth/>
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
