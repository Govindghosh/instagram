import React, { useState } from 'react'
import {
  Flex,
  Text,
  Avatar,
  Button,
 } from "@chakra-ui/react";

function SuggestedUser() {
  const [isFollow, setIsFollow]=useState(false);
  return (
    <>
      <Flex align={"center"} justifyContent={"space-between"} w={"full"}>
          <Flex alignItems={"center"} gap={2}>
            <Avatar src="/profilepic.png" name="Govind Ghosh"></Avatar>
            <Text fontWeight={"bold"} fontSize={14}>
              GovindGhosh
            </Text>
          </Flex>
          <Button
            color={"blue.600"}
            fontSize={12}
            fontWeight={"bold"}
            _hover={{ color: "gray.300" }}
            cursor={"pointer"}
            bg={"transparent"}
            onClick={()=>setIsFollow(!isFollow)}
          >
            {isFollow?"Unfollow":"Follow"}
          </Button>
        </Flex>
    </>
  )
}

export default SuggestedUser;
