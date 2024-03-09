import {
  Flex,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  Avatar,
  Divider,
  VStack,
  Button,
} from "@chakra-ui/react";

import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import FeedFooter from "../Feed/FeedFooter";
import { useSelector } from "react-redux";
import useDeletePost from "../../Hook/useDeletePost";
import Comment from "../Comment/Comment";

function ProfilePost({ post }) {
  const authUser = useSelector((state) => state.auth.user);
  const userProfile = useSelector((state) => state.userProfile.userProfile);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(" ");
  const { isDeleting, deletePost } = useDeletePost(post);

  const handleDeletePost = async () => {
    if (!window.confirm("Are you sure you want to DELETE this post?")) return;
    deletePost(post?.id);
  };

  const handleLikes = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLiked(true);
      setLikeCount(likeCount + 1);
    }
  };

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(1px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  return (
    <>
      <GridItem
        borderRadius={3}
        cursor="pointer"
        overflow="hidden"
        border="1px solid"
        borderColor="whiteAlpha.300"
        position="relative"
        aspectRatio={1 / 1}
        _hover={{ ".overlay": { display: "flex" } }}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        <Flex
          display="none"
          position="absolute"
          bg="blackAlpha.700"
          transition="all 0.3s ease"
          top={0}
          right={0}
          bottom={0}
          left={0}
          zIndex={1}
          justifyContent="center"
          className="overlay"
        >
          <Flex alignItems="center" justifyContent="center" gap={50}>
            <Flex>
              <AiFillHeart size={20} />
              <Text fontWeight="bold" ml={2}>
                {post.likes ? post.likes.length : 0}
              </Text>
            </Flex>
            <Flex>
              <FaComment size={20} />
              <Text fontWeight="bold" ml={2}>
                {post.comments ? post.comments.length : 0}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Image
          src={post.imageURL}
          alt="pro"
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </GridItem>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: "3xl", md: "5xl" }}
      >
        {/* <ModalOverlay /> */}
        {overlay}
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton color={"black"} />
          <ModalBody bg={"white"} pb={5} color={"black"}>
            <Flex
              gap={4}
              mx={"auto"}
              w={{ base: "90%", sm: "70%", md: "full" }}
              maxH={"90vh"}
              minH={"50vh"}
            >
              <Flex
                borderRadius={3}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                flex={1.5}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image src={post.imageURL} alt="pro" />
              </Flex>
              <Flex
                flex={1}
                flexDir={"column"}
                px={10}
                display={{ base: "none", md: "flex" }}
                gap={3}
              >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex alignItems={"center"} gap={4}>
                    <Avatar
                      src={userProfile?.profilePicURL}
                      size={"sm"}
                      name={userProfile?.fullName}
                    />
                    <Text fontWeight={"bold"} fontSize={12}>
                      {userProfile?.fullName}
                    </Text>
                  </Flex>
                  {authUser.uid === userProfile.uid && (
                    <Button
                      color={"black"}
                      borderRadius={3}
                      p={1}
                      _hover={{ color: "red.500" }}
                      onClick={handleDeletePost}
                      isLoading={isDeleting}
                    >
                      <RiDeleteBin6Line size={20} cursor={"pointer"} />
                    </Button>
                  )}
                </Flex>
                <Divider bg={"gray.300"} />
                <VStack
                  w={"full"}
                  alignItems={"start"}
                  overflowY={"auto"}
                  maxH={"350px"}
                >
                  {post.comments &&
                    post.comments.map((comment) => (
                      <Comment key={comment.id} comment={comment} />
                    ))}
                </VStack>
                <FeedFooter isProfilePage={true} post={post} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProfilePost;

//

// import {
//   Flex,
//   GridItem,
//   Image,
//   Modal,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalOverlay,
//   Text,
//   useDisclosure,
//   Avatar,
//   Divider,
//   VStack,
//   Button,
// } from "@chakra-ui/react";
// import Comment from "/src/components/Comment/Comment";
// import { useState } from "react";
// import { AiFillHeart } from "react-icons/ai";
// import { FaComment } from "react-icons/fa";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import FeedFooter from "../Feed/FeedFooter";
// import { useSelector } from "react-redux";
// import useDeletePost from "../../Hook/useDeletePost";

// function ProfilePost({ post }) {
//   const authUser = useSelector((state) => state.auth.user);
//   const userProfile = useSelector((state) => state.userProfile.userProfile);
//   const [liked, setLiked] = useState(false);
//   const [likeCount, setLikeCount] = useState(" ");
//   const [comment, setComment] = useState("");
//   const { isDeleting, deletePost } = useDeletePost();

//   const handleDeletePost = async () => {
//     if (!window.confirm("Are you sure you want to DELETE this post?")) return;
//     deletePost(post?.id);
//   };

//   const handleLikes = () => {
//     if (liked) {
//       setLiked(false);
//       setLikeCount(likeCount - 1);
//     } else {
//       setLiked(true);
//       setLikeCount(likeCount + 1);
//     }
//   };
//   const handlePostComment = () => {
//     console.log("Posting comment:", comment);
//     setComment("");
//   };

//   const OverlayOne = () => (
//     <ModalOverlay
//       bg="blackAlpha.300"
//       backdropFilter="blur(1px) hue-rotate(90deg)"
//     />
//   );

//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [overlay, setOverlay] = useState(<OverlayOne />);
//   return (
//     <>
//       <GridItem
//         borderRadius={3}
//         cursor="pointer"
//         overflow="hidden"
//         border="1px solid"
//         borderColor="whiteAlpha.300"
//         position="relative"
//         aspectRatio={1 / 1}
//         _hover={{ ".overlay": { display: "flex" } }}
//         onClick={() => {
//           setOverlay(<OverlayOne />);
//           onOpen();
//         }}
//       >
//         <Flex
//           display="none"
//           position="absolute"
//           bg="blackAlpha.700"
//           transition="all 0.3s ease"
//           top={0}
//           right={0}
//           bottom={0}
//           left={0}
//           zIndex={1}
//           justifyContent="center"
//           className="overlay"
//         >
//           <Flex alignItems="center" justifyContent="center" gap={50}>
//             <Flex>
//               <AiFillHeart size={20} />
//               <Text fontWeight="bold" ml={2}>
//                 {post.likes ? post.likes.length : 0}
//               </Text>
//             </Flex>
//             <Flex>
//               <FaComment size={20} />
//               <Text fontWeight="bold" ml={2}>
//                 {post.comments ? post.comments.length : 0}
//               </Text>
//             </Flex>
//           </Flex>
//         </Flex>
//         <Image
//           src={post.imageURL}
//           alt="pro"
//           objectFit="cover"
//           w="100%"
//           h="100%"
//         />
//       </GridItem>
//       <Modal
//         isOpen={isOpen}
//         onClose={onClose}
//         isCentered={true}
//         size={{ base: "3xl", md: "5xl" }}
//       >
//         {/* <ModalOverlay /> */}
//         {overlay}
//         <ModalContent>
//           {/* <ModalHeader>Modal Title</ModalHeader> */}
//           <ModalCloseButton color={"black"} />
//           <ModalBody bg={"white"} pb={5} color={"black"}>
//             <Flex
//               gap={4}
//               mx={"auto"}
//               w={{ base: "90%", sm: "70%", md: "full" }}
//               maxH={"90vh"}
//               minH={"50vh"}
//             >
//               <Flex
//                 borderRadius={3}
//                 overflow={"hidden"}
//                 border={"1px solid"}
//                 borderColor={"whiteAlpha.300"}
//                 flex={1.5}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//               >
//                 <Image src={post.imageURL} alt="pro" />
//               </Flex>
//               <Flex
//                 flex={1}
//                 flexDir={"column"}
//                 px={10}
//                 display={{ base: "none", md: "flex" }}
//                 gap={3}
//               >
//                 <Flex alignItems={"center"} justifyContent={"space-between"}>
//                   <Flex alignItems={"center"} gap={4}>
//                     <Avatar
//                       src={userProfile?.profilePicURL}
//                       size={"sm"}
//                       name={userProfile?.fullName}
//                     />
//                     <Text fontWeight={"bold"} fontSize={12}>
//                       {userProfile?.fullName}
//                     </Text>
//                   </Flex>
//                   {authUser.uid === userProfile.uid && (
//                     <Button
//                       color={"black"}
//                       borderRadius={3}
//                       p={1}
//                       _hover={{ color: "red.500" }}
//                       onClick={handleDeletePost}
//                       isLoading={isDeleting}
//                     >
//                       <RiDeleteBin6Line size={20} cursor={"pointer"} />
//                     </Button>
//                   )}
//                 </Flex>
//                 <Divider bg={"gray.300"} />
//                 <VStack
//                   w={"full"}
//                   alignItems={"start"}
//                   overflowY={"auto"}
//                   maxH={"350px"}
//                 >
//                   <Comment
//                     createAt={"1d ago"}
//                     username={"raghav"}
//                     profilePic={
//                       "https://i.pinimg.com/564x/4e/6c/b2/4e6cb2b0ec89722d85ae7c51bfeca34f.jpg"
//                     }
//                     text={"Nice pic"}
//                   />
//                   <Comment
//                     createAt={"1d ago"}
//                     username={"rahul"}
//                     profilePic={
//                       "https://i.pinimg.com/564x/e9/e3/a9/e9e3a94162e49f441f390b6b3a24ecb6.jpg"
//                     }
//                     text={"Nice pic"}
//                   />
//                   <Comment
//                     createAt={"1d ago"}
//                     username={"anant"}
//                     profilePic={
//                       "https://i.pinimg.com/564x/75/7c/34/757c340faa9f2cd7ec48776efad47d93.jpg"
//                     }
//                     text={"Nice pic"}
//                   />
//                 </VStack>
//                 <FeedFooter isProfilePage={true} />
//               </Flex>
//             </Flex>
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }

// export default ProfilePost;
