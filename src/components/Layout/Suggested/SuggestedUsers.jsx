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
import SuggestedUser from "./SuggestedUser";
import useGitHubData from '../../../assets/githubAPI'



function SuggestedUsers() {
      const data = useGitHubData();
      
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
        <SuggestedUser/>
        <SuggestedUser/>
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
export default SuggestedUsers;
