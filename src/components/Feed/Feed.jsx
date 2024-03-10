import {
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
} from "@chakra-ui/react";
import useFeedPosts from "../../Hook/useFeedPosts";
import FeedBody from "./FeedBody";

function Feed() {
  const { isLoading, posts } = useFeedPosts();

  if (isLoading) {
    // Display skeleton loading while data is loading
    return (
      <Container maxW={"container.sm"} py={10} px={2}>
        {[...Array(3)].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap="2">
              <SkeletonCircle size="10" />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height="10px" w={"200px"} />
                <Skeleton height="10px" w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"} h={"400px"} />
          </VStack>
        ))}
      </Container>
    );
  }

  if (!isLoading && posts.length === 0) {
    // Display message when there are no posts
    return (
      <Container maxW={"container.sm"} py={10} px={2}>
        <Text fontSize={"md"} color={"red.400"}>
          Dayuum. Looks like you don&apos;t have any friends.
        </Text>
        <Text color={"red.400"}>Stop coding and go make some!!</Text>
      </Container>
    );
  }

  // Display feed posts
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {posts.map((post) => (
        <FeedBody key={post.id} post={post} />
      ))}
    </Container>
  );
}

export default Feed;

// import { Container } from "@chakra-ui/react";
// import React from "react";
// import FeedBody from "./FeedBody";

// function Feed() {
//   return (
//     <>
//       <Container maxW={"md"} py={10} px={2}
//       //border={"1px solid red"}
//       >
//         <FeedBody
//           avatar="/profilepic.png"
//           userName="Govind Ghosh"
//           img="https://i.pinimg.com/736x/a5/47/c3/a547c3f7c4a6cd99c4d9782c5a1a34f5.jpg"
//         />
//         <FeedBody
//         avatar="/img2.png"
//         userName="Raghav Sharma"
//         img="https://i.pinimg.com/564x/4e/6c/b2/4e6cb2b0ec89722d85ae7c51bfeca34f.jpg"
//         />
//         <FeedBody
//         avatar="https://i.pinimg.com/564x/eb/47/51/eb4751dd3be00d5763217a0ef5e9fbef.jpg"
//         userName="Rahul Sharma"
//         img="https://i.pinimg.com/564x/e9/e3/a9/e9e3a94162e49f441f390b6b3a24ecb6.jpg"
//         />
//         <FeedBody
//         avatar="https://i.pinimg.com/564x/5b/80/ce/5b80ce3ad948084e89846f74be8abcbb.jpg"
//         userName="Anant Sharma"
//         img="https://i.pinimg.com/564x/75/7c/34/757c340faa9f2cd7ec48776efad47d93.jpg"
//         />
//       </Container>
//     </>
//   );
// }

// export default Feed;
