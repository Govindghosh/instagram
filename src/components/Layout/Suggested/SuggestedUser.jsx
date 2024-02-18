import React from "react";
import { Flex, Link, Avatar, Button, VStack, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import useFollowUser from "../../../Hook/useFollowUser";

function SuggestedUser({ user, setUser }) {
  console.log("suggestedUser", user);
  const authUser = useSelector((state) => state.auth.user);
  const { isUpdating, isFollowing, handleFollowUser } = useFollowUser(user.uid);

  const onFollowUser = async () => {
    await handleFollowUser();
    setUser({
      ...user,
      followers: isFollowing
        ? user.followers.filter((follower) => follower.uid !== authUser.uid)
        : [...user.followers, authUser],
    });
  };

  return (
    <Flex align={"center"} justifyContent={"space-between"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link to={`/${user.username}`}>
          <Avatar src={user.profilePicURL} size={"md"} />
        </Link>
        <VStack spacing={2} alignItems={"flex-start"}>
          <Link to={`/${user.username}`}>
            <Box fontSize={12} fontWeight={"bold"}>
              {user.fullName}
            </Box>
          </Link>
          <Box fontSize={11} color={"gray.500"}>
            {user.followers.length} followers
          </Box>
        </VStack>
      </Flex>
      {authUser.uid !== user.uid && (
        <Button
          color={"blue.600"}
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.300" }}
          cursor={"pointer"}
          bg={"transparent"}
          onClick={onFollowUser}
          isLoading={isUpdating}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      )}
    </Flex>
  );
}

export default SuggestedUser;
