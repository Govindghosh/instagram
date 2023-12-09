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
              <Input placeholder="Mobile Number or Email" fontsize={14} />
              <Input placeholder="Username" fontsize={14} />
              <Input placeholder="Full Name" fontsize={14} />
              <InputGroup>
                <Input
                  placeholder="Password"
                  type={show ? "text" : "password"}
                  fontsize={14}
                />
                <InputRightElement>
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? <IoIosEyeOff /> : <IoMdEye />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Input placeholder="Confirm Password" fontsize={14} />
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
                <Button className="w-64" colorScheme="linkedin">
                  Sign Up
                </Button>
              </WrapItem>
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
          <h3>Have an account?TODO</h3>
        </Box>
        </Flex>
       </Container>
    </>
  );
}

export default SignUpPage;
