import { Flex, GridItem, Image, Text } from '@chakra-ui/react';
import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';

function ProfilePost({ img }) {
  return (
    <GridItem
      cursor='pointer'
      borderRadius={3}
      overflow='hidden'
      border='1px solid'
      borderColor='whiteAlpha.300'
      position='relative'
      aspectRatio={1 / 1}
      _hover={{ '.overlay': { display: 'flex' } }}
    >
      <Flex
        display='none'
        position='absolute'
        bg='blackAlpha.700'
        transition='all 0.3s ease'
        top={0}
        right={0}
        bottom={0}
        left={0}
        zIndex={1}
        justifyContent='center'
        className='overlay'
      >
        <Flex alignItems='center' justifyContent='center' gap={50}>
          <Flex>
            <AiFillHeart size={20} />
            <Text fontWeight='bold' ml={2}>
              7
            </Text>
          </Flex>
          <Flex>
            <FaComment size={20} />
            <Text fontWeight='bold' ml={2}>
              7
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Image src={img} alt='pro' objectFit='cover' w='100%' h='100%' />
    </GridItem>
  );
}

export default ProfilePost;
