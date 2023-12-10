import { Box, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink} from 'react-router-dom'
import {InstagramLogo, InstagramMobileLogo} from '../../../assets/constants'


function Sidebar() {
  return (
    <>
      <Box
      borderRight={"1px solid"}
      borderColor={"gray.400"}
      height={"100vh"}
      position={"sticky"}
      top={0}
      left={0}
      px={{base:2, md:4}}
      py={8}
      >
        <Flex direction={"column"}
        height={"full"}
        w={"full"}
        gap={10}
        >
          <Link as={RouterLink}
          to={"/home"}
          cursor={"pointer"}
          pl={2}
          display={{base:"none", md:"block"}}
          >
            <InstagramLogo/>
          </Link>
          <Link as={RouterLink}
          to={"/home"}
          cursor={"pointer"}
          p={2}
          display={{base:"block", md:"none"}}
          w={10}
          borderRadius={6}
          _hover={{
            bg:"whiteAlpha.400"
          }}
          >
            <InstagramMobileLogo/>
          </Link>
        </Flex>
      </Box>
    </>
  )
}

export default Sidebar
