import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import useFollowUser from "../../Hook/useFollowUser";

function ProfileHeader() {
  const userProfile = useSelector((state) => state.userProfile.userProfile);
  const authUser = useSelector((state) => state.auth.user);
  console.log("authUser", authUser, "and", "userProfile", userProfile);
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const visitingOwnProfileAndAuth =
  //   authUser && authUser.username === userProfile?.username;
  // const visitingAnotherProfileAndAuth =
  //   authUser && authUser.username !== userProfile?.username;
  // test

  const visitingOwnProfileAndAuth =
    authUser && authUser.username !== userProfile?.username;
  const visitingAnotherProfileAndAuth =
    authUser && authUser.username === userProfile?.username;

  const { isUpdating, isFollowing, handleFollowUser } = useFollowUser(
    userProfile?.uid
  );
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        mx={"auto"}
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignItems={"flex-start"}
      >
        <Avatar
          src={authUser.profilePicURL}
          name={authUser.fullName}
          alt={authUser.fullName}
        />
      </AvatarGroup>
      <VStack alignItems={"start"} mx={"auto"} flex={1} gap={2}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          w={"full"}
          justifyContent={{ base: "center", sm: "flex-start" }}
          align={"center"}
        >
          <Text fontSize={{ base: "sm", sm: "lg" }}>{authUser.username}</Text>
          {visitingOwnProfileAndAuth && (
            <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
              <Button
                _hover={{ bg: "whiteAlpha.800" }}
                size={{ base: "xs", md: "sm" }}
                color={"black"}
                bg={"white"}
                onClick={onOpen}
              >
                Edit profile
              </Button>
            </Flex>
          )}
          {visitingAnotherProfileAndAuth && (
            <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
              <Button
                _hover={{ bg: "whiteAlpha.800" }}
                size={{ base: "xs", md: "sm" }}
                color={"black"}
                bg={"white"}
                onClick={onOpen}
              >
                {isFollowing ? "Unfollow" : "Follow"}
              </Button>
            </Flex>
          )}
        </Flex>
        <Flex gap={{ base: 2, sm: 4 }} alignItems={"center"}>
          <Text>
            <Text mr={"1px"} as="span" fontWeight={"bold"}>
              {authUser.post ? authUser.post.length : 0}
            </Text>
            Post
          </Text>
          <Text>
            <Text mr={"1px"} as="span" fontWeight={"bold"}>
              {authUser.followers ? authUser.followers.length : 0}
            </Text>
            followers
          </Text>
          <Text>
            <Text mr={"1px"} as="span" fontWeight={"bold"}>
              {authUser.following ? authUser.following.length : 0}
            </Text>
            following
          </Text>
        </Flex>
        <Flex>
          <Text>{authUser.fullName}</Text>
        </Flex>
        <Flex>
          <Text>{authUser.bio}</Text>
        </Flex>
      </VStack>
      {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
    </Flex>
  );
}

export default ProfileHeader;
