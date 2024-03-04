import { Box, Flex, Grid, Skeleton, Text, VStack } from "@chakra-ui/react";
import ProfilePost from "./ProfilePost";
import useGetUserPosts from "../../Hook/useGetUserPosts";

function ProfilePosts() {
  const { isLoading, posts } = useGetUserPosts();
  console.log("posts:", posts);

  const noPostsFound = !isLoading && posts?.length === 0;
  if (noPostsFound) return <NoPostsFound />;
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={1}>
      {isLoading &&
        [0, 1, 2].map((_, idx) => (
          <VStack key={idx} alignItems="flex-start" gap={1}>
            <Skeleton w="full">
              <Box h="300px"></Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          {posts.map((post) => (
            <ProfilePost post={post} key={post.id} />
          ))}
        </>
      )}
    </Grid>
  );
}

export default ProfilePosts;

const NoPostsFound = () => {
  return (
    <Flex flexDir="column" textAlign={"center"} mx={"auto"} mt={10}>
      <Text fontSize={"2xl"}>No Posts Found🤔</Text>
    </Flex>
  );
};

// function ProfilePosts() {
//   const [isLoading, setIsLoading] = useState(true);

//   using for ui
//   useEffect(() => {
//     // Simulating a data fetch
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);
//   }, []);

//   const noPostsFound = !isLoading && reduxPosts?.length === 0;
//   if (noPostsFound) return <NoPostsFound />;
//   return (
//     <Grid templateColumns="repeat(3, 1fr)" gap={1}>
//       {isLoading
//         ? [0, 1, 2].map((_, idx) => (
//             <VStack key={idx} alignItems="flex-start" gap={1}>
//               <Skeleton w="full">
//                 <Box h="300px"></Box>
//               </Skeleton>
//             </VStack>
//           ))
//         : [0, 1, 2].map((index) => (
//             <ProfilePost
//               key={index}
//               img="https://i.pinimg.com/564x/c7/dc/36/c7dc36bcda6451d9c018669bb0ed1806.jpg"
//             />
//           ))}

//     </Grid>
//   );
// }

// export default ProfilePosts;
