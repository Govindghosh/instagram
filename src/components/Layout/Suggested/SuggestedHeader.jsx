import { Avatar, Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'
import {Link as RouterLink} from 'react-router-dom'



function SuggestedHeader() {
  return (
    <>
      <Flex 
      justifyContent={"space-between"}
      alignItems={"center"}

      w={"full"}
      >
        <Flex
        alignItems={"center"}
        gap={2}
        >
            <Avatar src='/profilepic.png'
            name='Govind Ghosh'
            
            ></Avatar>
            <Text
            fontWeight={"bold"}
            fontSize={14}
            >GovindGhosh</Text>
        </Flex>
        <Link
        className='no-underline'
        as={RouterLink}
        color={"blue.600"}
        fontSize={12}
        fontWeight={"bold"}
        to={"/"}
        style={{ textDecoration: 'none' }}
        >
            Switch
        </Link>
      </Flex>
    </>
  )
}

export default SuggestedHeader
