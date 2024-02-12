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
  const authUser = useSelector((state) => state.auth.user);
  const userProfile = useSelector((state) => state.userProfile.userProfile);
  console.log("authUser", authUser, "and", "userProfile", userProfile);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const visitingOwnProfileAndAuth =
    authUser && authUser.username === userProfile?.username;
  const visitingAnotherProfileAndAuth =
    authUser && authUser.username !== userProfile?.username;

  const { isUpdating, isFollowing, handleFollowUser } = useFollowUser(
    userProfile?.uid
  );

  // const visitingOwnProfileAndAuth =
  //   authUser && authUser.username !== userProfile?.username;
  // const visitingAnotherProfileAndAuth =
  //   authUser && authUser.username === userProfile?.username;

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
          src={userProfile.profilePicURL}
          name={userProfile.fullName}
          alt={userProfile.fullName}
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
          <Text fontSize={{ base: "sm", sm: "lg" }}>
            {userProfile.username}
          </Text>
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
                onClick={handleFollowUser}
                isLoading={isUpdating}
              >
                {isFollowing ? "Unfollow" : "Follow"}
              </Button>
            </Flex>
          )}
        </Flex>
        <Flex gap={{ base: 2, sm: 4 }} alignItems={"center"}>
          <Text>
            <Text mr={"1px"} as="span" fontWeight={"bold"}>
              {userProfile && userProfile.post ? userProfile.post.length : 0}
            </Text>
            Post
          </Text>
          <Text>
            <Text mr={"1px"} as="span" fontWeight={"bold"}>
              {userProfile && userProfile.followers
                ? userProfile.followers.length
                : 0}
            </Text>
            followers
          </Text>
          <Text>
            <Text mr={"1px"} as="span" fontWeight={"bold"}>
              {userProfile && userProfile.following
                ? userProfile.following.length
                : 0}
            </Text>
            following
          </Text>
        </Flex>
        <Flex>
          <Text>{userProfile.fullName}</Text>
        </Flex>
        <Flex>
          <Text>{userProfile.bio}</Text>
        </Flex>
      </VStack>
      {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
    </Flex>
  );
}

export default ProfileHeader;
