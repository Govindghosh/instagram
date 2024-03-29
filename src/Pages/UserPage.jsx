import {
  Container,
  Flex,
  Link,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileTabs from "../components/Profile/ProfileTabs";
import ProfilePosts from "../components/Profile/ProfilePosts";
import { Link as RouterLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useGetUserProfileByUsername from "../Hook/useGetUserProfileByUsername";

function UserPage() {
  const { username } = useParams();

  //const userData = useSelector((state) => state.auth.user);
  const { isLoading, userProfile } = useGetUserProfileByUsername(username);
  const userNotFound = !isLoading && !userProfile;
  if (userNotFound) return <UserNotFound />;

  // const userNotFound = !userData;
  // if (userNotFound) {
  //   return <UserNotFound />;
  // }
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
          {/* {userData && <ProfileHeader />}
          {isLoading && <ProfileHeaderSkeleton />} */}
          {!isLoading && userProfile && <ProfileHeader />}
          {isLoading && <ProfileHeaderSkeleton />}
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

// skeleton for profile header

const ProfileHeaderSkeleton = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <SkeletonCircle size="24" />

      <VStack
        alignItems={{ base: "center", sm: "flex-start" }}
        gap={2}
        mx={"auto"}
        flex={1}
      >
        <Skeleton height="12px" width="150px" />
        <Skeleton height="12px" width="100px" />
      </VStack>
    </Flex>
  );
};

const UserNotFound = () => {
  return (
    <Flex flexDir="column" textAlign={"center"} mx={"auto"}>
      <Text fontSize={"2xl"}>User Not Found</Text>
      <Link
        as={RouterLink}
        to={"/home"}
        color={"blue.500"}
        w={"max-content"}
        mx={"auto"}
      >
        Go home
      </Link>
    </Flex>
  );
};
