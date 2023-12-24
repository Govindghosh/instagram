
import { Box, Flex, Text, Input, InputGroup, InputRightElement, Button, Avatar } from "@chakra-ui/react";
import React, { useState } from 'react';


const Comment = ({createAt, username, profilePic, text}) => {
 
  
  return (
    
    <>
      <Flex gap={4} >
        <Avatar 
        src={profilePic}
        name={username}
        size={"sm"}
        />
        <Flex direction={"column"}>
          <Flex
          gap={2}
          >
            <Text
            fontWeight={"bold"}
            fontSize={12}
            >
              {username}
            </Text>
            <Text
            
            fontSize={12}
            >
              {text}
            </Text>
          </Flex>
            <Text
            fontSize={10}
            color={"gray.600"}
            >
              {createAt}
            </Text>
        </Flex>
        
      </Flex>
      
    </>
  );
};

export default Comment;

