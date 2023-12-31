import {
  Box,
  VStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Container,
  Flex,
  WrapItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import Signup from "../components/AuthForm/Signup";

function SignUpPage() {
  
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  

  return (
    <>
      <Container  maxW={"container.md"} padding={5}>
        <Flex  justifyContent={"center"} alignItems={"center"} gap={10}>
          <Box className="w-96" border={"1px solid gray"} padding={5} borderRadius={2}>
            <VStack>
              <Image
                src="/logo.png"
                alt="instaLogo"
                h={24}
                cursor={"pointer"}
              />
              <Box
                className="text-gray-600 font-semibold text-center"
                maxW={280}
              >
                Sign up to see photos and videos from your friends.
              </Box>
              <WrapItem>
                <Button className="w-64" colorScheme="linkedin">
                  Log in with Facebook
                </Button>
              </WrapItem>
              <Signup/>
              
            </VStack>
          </Box>
        </Flex>
        <Flex  justifyContent={"center"} alignItems={"center"} gap={10} padding={2}>
        <Box
          className="w-96"
          justifyContent={"center"}
          alignItems={"center"}
          border={"1px solid gray"}
          padding={5}
          borderRadius={2}
          
        >
          <h3 className="flex justify-center items-center">Have an account?<Link
            to="/"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >Login</Link></h3>
        </Box>
        </Flex>
        <Box textAlign={"center"}> Get the app .</Box>
              <Flex gap={5} p={2} justifyContent={"center"}>
                <Image  src="/playstore.png" h={10} alt="PlayStore" />
                <Image  src="/microsoft.png" h={10} alt="Microsoft" />
              </Flex>
       </Container>
    </>
  );
}

export default SignUpPage;
