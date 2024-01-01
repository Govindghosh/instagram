import { Container, Flex, Text, Link } from "@chakra-ui/react";
import React from "react";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileTabs from "../components/Profile/ProfileTabs";
import ProfilePosts from "../components/Profile/ProfilePosts";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import useGetUserProfileByUsername from "../Hook/useGetUserProfileByUsername";

function UserPage() {
  const { username } = useParams();
  const { isLoading, userProfile } = useGetUserProfileByUsername(username);
  const userNotFound = !isLoading && !userProfile;

  return (
    <>
      <Container maxW={"container.lg"} py={5}>
        <Flex
          py={10}
          px={4}
          w={"full"}
          mx={"auto"}
          pl={{ base: 4, md: 10 }}
          flexDirection={"column"}
        >
          {!isLoading && userProfile && <ProfileHeader />}
        </Flex>
        <Flex
          borderTop={"1px solid"}
          borderColor={"gray.700"}
          maxW={"full"}
          mx={"auto"}
          direction={"column"}
          px={{ base: 2, md: 4 }}
        >
          <ProfileTabs />
          <ProfilePosts />
        </Flex>
      </Container>
    </>
  );
}

export default UserPage;

const userNotFound = () => {
  return (
    <Flex flexDir="column" textAlign={"center"} mx={"auto"}>
      <Text fontSize={"2xl"}>User Not Found</Text>
      <Link
        as={RouterLink}
        to={"/"}
        color={"blue.500"}
        w={"max-content"}
        mx={"auto"}
      >
        Go home
      </Link>
    </Flex>
  );
};
