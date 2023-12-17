import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import Feed from '../components/Feed/Feed'
import SuggestedUser from '../components/Layout/Suggested/SuggestedUser'

function HomePage() {
  return (
    <>
      <Container maxW={"container.lg"}>
        <Flex gap={5} >
          <Box flex={2}
          pt={"120px"}
          pb={20}
          
          //border={"1px solid blue"}
          >
            <Feed/>
          </Box>
          <Box
          mr={10}
          flex={3}
          display={{base:"none", lg:"block"}}
          pt={1}
          pb={15}
          //py={2}
          //border={"1px solid red"}
          maxW={"20vw"}
          ><SuggestedUser/></Box>
        </Flex>
      </Container>
    
    
    </>
  )
}

export default HomePage
