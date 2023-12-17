import { Box, Flex, Text, Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import React, { useState } from "react";
//import { GoHeart } from "react-icons/go";
import { FiSend } from "react-icons/fi";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
  SaveLogo
} from "../../assets/constants";

function FeedFooter({userName}) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(" ");
  const [comment, setComment] = useState('');
  const handleLikes = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLiked(true);
      setLikeCount(likeCount + 1);
    }
  };
  const handlePostComment = () => {
    console.log('Posting comment:', comment);
    setComment('');
  };

  return (
    <Box mb={10}>
      <Flex
        border={"1px solid gray"}
        alignItems={"center"}
        gap={4}
        w={"full"}
        pt={0}
        mb={2}
        cursor={"pointer"}
      >
        <Box onClick={handleLikes}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box>
          <CommentLogo />
        </Box>
        <Box>
          <FiSend size={25} />
        </Box>
        <Box ml={"auto"}>
          <SaveLogo />
        </Box>
      </Flex>
      <Text fontWeight={500} fontSize={"sm"}>
        {likeCount} likes
      </Text>
      <Text fontWeight={600} fontSize={"sm"}>
        {userName}{" "}
        <Text as="span" fontWeight={300}>
          userCaption
        </Text>
      </Text>
      <Text fontSize={"sm"} color={"gray"}>
        View all 38 comments
      </Text>
      <Flex 
      alignItems={"center"}
      gap={2}
      w={"full"}
      justifyContent={"space-between"}
      >
        <InputGroup>
        <Input
        placeholder="Add a comment…"
        fontSize={14}
        variant={"flushed"}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        />
        
          <InputRightElement>
          {comment && ( <Button
            bg={"transparent"}
            fontSize={14}
            color={"blue.500"}
            fontWeight={500}
            _hover={{color: "gray.400"}}
            onClick={handlePostComment}
            >Post</Button> )}
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
}

export default FeedFooter;
