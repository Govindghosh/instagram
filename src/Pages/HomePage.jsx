import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import Feed from "../components/Feed/Feed";
import SuggestedUsers from "../components/Layout/Suggested/SuggestedUsers";

function HomePage() {
  return (
    <>
      <Container maxW={"container.lg"}>
        <Flex gap={5}>
          <Box flex={2} pt={"120px"} pb={20}>
            <Feed />
          </Box>
          <Box
            mr={10}
            flex={3}
            display={{ base: "none", lg: "block" }}
            pt={1}
            pb={15}
            maxW={"20vw"}
          >
            <SuggestedUsers />
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export default HomePage;
