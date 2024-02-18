//import React from "react";
import SuggestedHeader from "./SuggestedHeader";
import { Flex, VStack, Text, Button, Box, Link } from "@chakra-ui/react";
import SuggestedUser from "./SuggestedUser";
import useGitHubData from "../../../assets/githubAPI";
import useGetSuggestedUsers from "../../../Hook/useGetSuggestedUsers";

function SuggestedUsers() {
  const data = useGitHubData();
  const { isLoading, suggestedUsers } = useGetSuggestedUsers();

  if (isLoading) return null;

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
        {suggestedUsers.map((user) => (
          <SuggestedUser user={user} key={user.id} />
        ))}
        <SuggestedUser />
        <Box
          fontSize={12}
          fontWeight="bold"
          color={"gray"}
          mt={5}
          alignSelf={"start"}
        >
          &copy; 2023 Built by{" "}
          <Link href={data.html_url} target="_blank" textDecoration="none">
            {data.name}
          </Link>{" "}
          {data.bio}
        </Box>
      </VStack>
    </>
  );
}
export default SuggestedUsers;
