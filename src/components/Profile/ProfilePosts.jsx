import React, { useEffect, useState } from 'react';
import { Box, Grid, Skeleton, VStack } from '@chakra-ui/react';
import ProfilePost from './ProfilePost';

function ProfilePosts() {
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    // Simulating a data fetch
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={1}>
      {isLoading ? (
        [0, 1, 2, 3, 4, 5].map((_, idx) => (
          <VStack key={idx} alignItems='flex-start' gap={1}>
            <Skeleton w='full'>
              <Box h='300px'></Box>
            </Skeleton>
          </VStack>
        ))
      ) : (
        [0, 1, 2].map((index) => (
          //<ProfilePost key={index} img="https://filmfare.wwmindia.com/photogallery/2023/may/salmankhan11684830563.jpg" />
          <ProfilePost key={index} img="https://i.pinimg.com/564x/c7/dc/36/c7dc36bcda6451d9c018669bb0ed1806.jpg" />
        ))
      )}
    </Grid>
  );
}

export default ProfilePosts;
