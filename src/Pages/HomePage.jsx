import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import Feed from '../components/Feed/Feed'

function HomePage() {
  return (
    <>
      <Container maxW={"container.lg"}>
        <Flex gap={5} >
          <Box flex={2}
          py={10}
          border={"1px solid blue"}
          >
            <Feed/>
          </Box>
          <Box
          mr={10}
          flex={3}
          display={{base:"none", lg:"block"}}
          py={20}
          border={"1px solid red"}
          maxW={"20vw"}
          >Suggested</Box>
        </Flex>
      </Container>
    
    
    </>
  )
}

export default HomePage
