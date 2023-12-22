import { Flex, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, Box, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';

function ProfilePost({ img }) {
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(1px) hue-rotate(90deg)'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  return (
    <>
    <GridItem
      borderRadius={3}
      cursor='pointer'
      overflow='hidden'
      border='1px solid'
      borderColor='whiteAlpha.300'
      position='relative'
      aspectRatio={1 / 1}
      _hover={{ '.overlay': { display: 'flex' } }}
      onClick={() => {
        setOverlay(<OverlayOne />)
        onOpen()
      }}
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
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={{ base: "3xl", md: "5xl" }}>
        {/* <ModalOverlay /> */}
        {overlay}
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton color={"black"} />
          <ModalBody bg={"white"} pb={5} color={"black"}>
            <Flex gap={4} mx={"auto"}
            w={{base:"90%", sm:"70%", md:"full"}}
            >
              <Box
              borderRadius={3}
              overflow={"hidden"}
              border={"1px solid"}
              borderColor={"whiteAlpha.300"}
              flex={1.5}
              ><Image src={img} alt='pro'/>
              </Box>
              <Flex flex={1}
              flexDir={"column"}
              px={10}
              display={{base:"none", md:"flex"}}
              >flex</Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProfilePost;
