import React from 'react'
import FeedHeader from './FeedHeader'
import FeedFooter from './FeedFooter'
import { Box, Image } from '@chakra-ui/react'

function FeedBody() {
  return (
    <>
        <FeedHeader/>
            <Box>
                <Image src='/img1.png' alt='Image'/>
            </Box>
        <FeedFooter/>
    </>
  )
}

export default FeedBody
