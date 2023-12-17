import React, { useEffect, useState } from "react";
import SuggestedHeader from "./SuggestedHeader";
import {
  Flex,
  VStack,
  Text,
  Button,
  Avatar,
  Box,
  Link,
} from "@chakra-ui/react";



export default function SuggestedUser() {
      const [data, setData]=useState([])
        useEffect(() => {
        fetch('https://api.github.com/users/Govindghosh')
            .then(res => res.json())
            .then(data =>{
            //console.log(data);
            setData(data)
            }) }, [])
  return (
    <>
      <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
          <Text fontWeight={"bold"} color={"gray.500"} fontSize={15}>
            Suggested for you
          </Text>
          <Button
            bg={"transparent"}
            fontSize={12}
            color={"gray.500"}
            fontWeight={500}
            _hover={{ color: "gray.400" }}
            pr={0}
          >
            See All
          </Button>
        </Flex>
        <Flex align={"center"} justifyContent={"space-between"} w={"full"}>
          <Flex alignItems={"center"} gap={2}>
            <Avatar src="/profilepic.png" name="Govind Ghosh"></Avatar>
            <Text fontWeight={"bold"} fontSize={14}>
              GovindGhosh
            </Text>
          </Flex>
          <Text
            color={"blue.600"}
            fontSize={12}
            fontWeight={"bold"}
            _hover={{ color: "gray.300" }}
            cursor={"pointer"}
          >
            Follow
          </Text>
        </Flex>
        <Box
          fontSize={12}
          fontWeight="bold"
          _hover={{ color: "gray.300" }}
          color={"gray"}
          mt={5}
          alignSelf={"start"}
        >
          &copy; 2023 Built by{" "}
          <Link 
          href={data.html_url}
          target="blank"
          style={{ textDecoration: "none" }}>{data.name}{data.bio}</Link>
        </Box>
      </VStack>
    </>
  );
}



