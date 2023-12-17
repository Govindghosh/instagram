import React from 'react'
import FeedHeader from './FeedHeader'
import FeedFooter from './FeedFooter'
import { Box, Image } from '@chakra-ui/react'

function FeedBody({img, userName, avatar}) {
  return (
    <>
        <FeedHeader userName={userName} avatar={avatar}/>
            <Box my={2} cursor={"pointer"}
            overflow={"hidden"}
            borderRadius={4}
            >
                <Image src={img} alt='Image'/>
            </Box>
        <FeedFooter userName={userName}/>
    </>
  )
}

export default FeedBody
