import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";



function FacebookAuth() {
  return (
    <>
      <Flex gap={1}>
        <Image src="/facebook.png" alt="Facebook-icon" h={"20px"} />
        <Text className="text-sm text-sky-700 font-semibold">
          Log in with Facebook
        </Text>
      </Flex>
    </>
  );
}

export default FacebookAuth;
