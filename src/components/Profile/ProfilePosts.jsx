import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

function ProfilePosts() {
  return (
    <>
      <Grid templateColumns='repeat(3, 1fr)' gap={1}>
        <GridItem w='100%' h={{}} bg='blue.500' />
        <GridItem w='100%' h={{}} bg='blue.500' />
        <GridItem w='100%' h={{}} bg='blue.500' />
        <GridItem w='100%' h={{}} bg='blue.500' />
        <GridItem w='100%' h={{}} bg='blue.500' />
      </Grid>
    </>
  );
}

export default ProfilePosts;

