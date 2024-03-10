import {
  Avatar,
  Box,
  Flex,
  Skeleton,
  SkeletonCircle,
  Button,
} from "@chakra-ui/react";
import { timeAgo } from "../../utils/timeAgo";
import { Link } from "react-router-dom";
import useFollowUser from "../../Hook/useFollowUser";

function FeedHeader({ post, creatorProfile }) {
  const { isUpdating, isFollowing, handleFollowUser } = useFollowUser(
    post.createdBy
  );
  return (
    <>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"full"}
        my={2}
        cursor={"pointer"}
      >
        <Flex alignItems={"center"} gap={2}>
          {creatorProfile ? (
            <Link to={`user/${creatorProfile?.username}`}>
              <Avatar
                src={creatorProfile?.profilePicURL}
                alt="userProfile"
                size={"sm"}
              />
            </Link>
          ) : (
            <SkeletonCircle size={"10px"} />
          )}

          <Flex fontSize={12} fontWeight={"bold"} gap={2}>
            {creatorProfile ? (
              <Link to={`/user/${creatorProfile?.username}`}>
                {creatorProfile?.username}
              </Link>
            ) : (
              <Skeleton w={"100px"} h={"10px"} />
            )}
            <Box color={"gray.500"}>• {timeAgo(post?.createAt)}</Box>
          </Flex>
        </Flex>
        <Box cursor={"pointer"}>
          <Button
            size={"xs"}
            bg={"transparent"}
            fontSize={12}
            fontWeight={"bold"}
            color={"blue.500"}
            _hover={{
              color: "white",
            }}
            transition={"0.2s ease-in-out"}
            onClick={handleFollowUser}
            isLoading={isUpdating}
          >
            {isFollowing ? "unfollow" : "Follow"}
          </Button>
        </Box>
      </Flex>
    </>
  );
}

export default FeedHeader;
