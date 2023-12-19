import { Avatar, AvatarGroup, Button, Flex, Text, VStack,  } from "@chakra-ui/react";
import React from "react";
import useGitHubData from '../../assets/githubAPI'

function ProfileHeader() {
  const data=useGitHubData();
  return (
    <>
      <Flex
        gap={{ base: 4, sm: 10 }}
        py={10}
        direction={{ base: "column", sm: "row" }}
      >
        <AvatarGroup
          mx={"auto"}
          size={{ base: "xl", md: "2xl" }}
          justifySelf={"center"}
          alignItems={"flex-start"}
        >
          <Avatar
            src="profilepic.png"
            name="Govind Ghosh"
            alt="ProfileName Govind GHosh"
          />
        </AvatarGroup>
        <VStack
        alignItems={"start"}
        mx={"auto"}
        flex={1}
        gap={2}
        >
            <Flex
            gap={4}
            direction={{base:"column", sm:"row"}}
            w={"full"}
            justifyContent={{base:"center", sm:"flex-start"}}
            align={"center"}
            >
              <Text fontSize={{base:"sm", sm:"lg"}}>Govindghosh</Text>
              <Flex
              gap={4}
              alignItems={"center"}
              justifyContent={"center"}
              >
                <Button
                _hover={{bg:"whiteAlpha.800"}}
                size={{base:"xs", md:"sm"}}
                color={"black"}
                bg={"white"}
                >
                  Edit profile
                </Button>
              </Flex>

            </Flex>
            <Flex
            gap={{base:2, sm:4}}
            alignItems={"center"}
            >
                <Text>
                  <Text mr={"1px"}
                  as="span"
                  fontWeight={"bold"}
                  >
                    69
                  </Text>
                  Post
                </Text>
                <Text>
                  <Text mr={"1px"}
                  as="span"
                  fontWeight={"bold"}
                  >
                    69
                  </Text>
                  followers
                </Text>
                <Text>
                  <Text mr={"1px"}
                  as="span"
                  fontWeight={"bold"}
                  >
                    69
                  </Text>
                  following
                </Text>
            </Flex>
            <Flex>
              <Text>Govind Ghosh</Text>
            </Flex>
            <Flex>
              <Text>{data.bio}</Text>
            </Flex>
        </VStack>
      </Flex>
    </>
  );
}

export default ProfileHeader;
