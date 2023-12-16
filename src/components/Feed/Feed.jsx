import { Container } from '@chakra-ui/react'
import React from 'react'
import FeedBody from './FeedBody'



function Feed() {
  return (
    <>
        <Container maxW={"md"} py={10} px={2} border={"1px solid red"}>
            <FeedBody />
            <FeedBody/>
            <FeedBody/>
            <FeedBody/>
        </Container>
    </>
  )
}

export default Feed
