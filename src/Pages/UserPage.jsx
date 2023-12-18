import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import ProfileHeader from '../components/Profile/ProfileHeader'
import ProfileTabs from '../components/Profile/ProfileTabs'
import ProfilePosts from '../components/Profile/ProfilePosts'

function UserPage() {
  return (
    <>
      <Container border={"1px solid red"}
        maxW={"container.lg"}
        py={5}
        >
        <Flex
        border={"1px solid blue"}
        py={10}
        px={4}
        w={"full"}
        mx={"auto"}
        pl={{base:4,md:10}}
        flexDirection={"column"}
        >
           <ProfileHeader/>
        </Flex>
        <Flex  border={"1px solid blue"}
        borderTop={"1px solid"}
        borderColor={"whiteAlpha.300"}
        maxW={"full"}
        mx={"auto"}
        direction={"column"}
        px={{base:2, md:4}}
        >
         <ProfileTabs/>
         <ProfilePosts/>
        </Flex>
      </Container>
    </>
  )
}

export default UserPage
