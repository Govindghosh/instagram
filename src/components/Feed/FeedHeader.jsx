import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

function FeedHeader() {
  return (
    <>
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2} cursor={"pointer"}>
            <Flex alignItems={"center"} gap={2}>
              <Avatar src='/img1.png' alt='userProfile' size={"sm"}/>
              <Flex fontSize={12} fontWeight={"bold"} gap={2}>Govind Ghosh 
              <Box color={"gray.500"}>
                • 21h</Box>
              </Flex>
            </Flex>
            <Box cursor={"pointer"}>
              <Text
              fontSize={12}
              color={"blue.500"}
              _hover={{
                color:"white"
              }}
              transition={"0.2s ease-in-out"}
              >unfollow</Text>
            </Box>


        </Flex>
    </>
  )
}

export default FeedHeader
