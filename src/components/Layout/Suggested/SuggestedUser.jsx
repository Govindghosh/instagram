import React, { useState } from "react";
import { Flex, Link, Avatar, Button, VStack, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import useFollowUser from "../../../Hook/useFollowUser";

function SuggestedUser({ user }) {
  const { isUpdating, isFollowing, handleFollowUser } = useFollowUser(user.uid);
  const authUser = useSelector((state) => state.auth.user);
  return (
    <>
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
            onClick={handleFollowUser}
            isLoading={isUpdating}
          >
            {isFollowing ? "Unfollow" : "Follow"}
          </Button>
        )}
      </Flex>
    </>
  );
}

export default SuggestedUser;
