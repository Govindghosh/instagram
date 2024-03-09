import { Avatar, Flex, Skeleton, SkeletonCircle, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useGetUserProfileById from "../../Hook/useGetUserProfileById";
import { timeAgo } from "../../utils/timeAgo";

const Comment = ({ comment }) => {
  const { isLoading, userProfile } = useGetUserProfileById(comment.createdBy);
  console.log("from comment.jsx userProfile - ", userProfile);

  if (isLoading) return <CommentSkeleton />;

  return (
    <>
      <Flex gap={4}>
        <Link to={`/user/${userProfile?.username}`}>
          <Avatar src={userProfile?.profilePicURL} size={"sm"} />
        </Link>
        <Flex direction={"column"}>
          <Flex gap={2}>
            <Link to={`/user/${userProfile?.username}`}>
              <Text fontWeight={"bold"} fontSize={12}>
                {userProfile?.username}
              </Text>
            </Link>
            <Text fontSize={12}>{comment?.comment}</Text>
          </Flex>
          <Text fontSize={10} color={"gray.600"}>
            {timeAgo(comment?.createdAt)}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Comment;

const CommentSkeleton = () => {
  return (
    <Flex gap={4} w={"full"} alignItems={"center"}>
      <SkeletonCircle h={10} w="10" />
      <Flex gap={1} flexDir={"column"}>
        <Skeleton height={2} width={100} />
        <Skeleton height={2} width={50} />
      </Flex>
    </Flex>
  );
};

{
  /* 
 

 import { Box, Flex, Text, Input, InputGroup, InputRightElement, Button, Avatar } from "@chakra-ui/react";
 import React, { useState } from 'react';

const Comment = ({createAt, username, profilePic, text}) => { 

 return (

   <>
       <Flex gap={4} >
        <Avatar
         src={profilePic}
         name={username}
         size={"sm"}
         />
         <Flex direction={"column"}>
           <Flex
           gap={2}
           >
             <Text
             fontWeight={"bold"}
             fontSize={12}
             >
               {username}
             </Text>
             <Text

             fontSize={12}
            >
               {text}
             </Text>
           </Flex>
             <Text
             fontSize={10}
             color={"gray.600"}
             >
               {createAt}
             </Text>
         </Flex>

       </Flex>

     </>
   );
 };

 export default Comment; */
}
