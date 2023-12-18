import { Avatar, AvatarGroup, Flex, VStack } from "@chakra-ui/react";
import React from "react";

function ProfileHeader() {
  return (
    <>
      <Flex
        border={"1px solid blue"}
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
            
            >

            </Flex>
        </VStack>
      </Flex>
    </>
  );
}

export default ProfileHeader;
