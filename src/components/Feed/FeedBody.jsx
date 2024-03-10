import React from "react";
import FeedHeader from "./FeedHeader";
import FeedFooter from "./FeedFooter";
import { Box, Image } from "@chakra-ui/react";
import useGetUserProfileById from "../../Hook/useGetUserProfileById";

function FeedBody({ post }) {
  const { userProfile } = useGetUserProfileById(post.createdBy);
  return (
    <>
      <FeedHeader post={post} creatorProfile={userProfile} />
      <Box
        my={2}
        cursor={"pointer"}
        overflow={"hidden"}
        borderRadius={4}
        maxH={"100vh"}
      >
        <Image src={post.imageURL} alt="Image" />
      </Box>
      <FeedFooter post={post} creatorProfile={userProfile} />
    </>
  );
}

export default FeedBody;
