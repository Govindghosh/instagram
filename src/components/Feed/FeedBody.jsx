import React from 'react'
import FeedHeader from './FeedHeader'
import FeedFooter from './FeedFooter'
import { Box, Image } from '@chakra-ui/react'

function FeedBody() {
  return (
    <>
        <FeedHeader/>
            <Box>
                <Image src='https://i.pinimg.com/736x/a5/47/c3/a547c3f7c4a6cd99c4d9782c5a1a34f5.jpg' alt='Image'/>
            </Box>
        <FeedFooter/>
    </>
  )
}

export default FeedBody
