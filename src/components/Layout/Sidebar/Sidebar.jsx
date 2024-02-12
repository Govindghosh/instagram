import { Box, Button, Flex, Link, Tooltip } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { InstagramLogo, InstagramMobileLogo } from "../../../assets/constants";
import { IoLogOutOutline } from "react-icons/io5";
import useLogout from "../../../Hook/useLogout";
import SidebarItems from "./SidebarItems";

function Sidebar() {
  const { handelLogout, isLoggingOut } = useLogout();

  return (
    <>
      <Box
        borderRight={"1px solid"}
        borderColor={"gray.400"}
        height={"100vh"}
        position={"sticky"}
        top={0}
        left={0}
        px={{ base: 2, md: 4 }}
        py={8}
      >
        <Flex direction={"column"} height={"full"} w={"full"} gap={10}>
          <Link
            as={RouterLink}
            to={"/home"}
            cursor={"pointer"}
            pl={2}
            display={{ base: "none", md: "block" }}
          >
            <InstagramLogo />
          </Link>
          <Link
            as={RouterLink}
            to={"/home"}
            cursor={"pointer"}
            p={2}
            display={{ base: "block", md: "none" }}
            w={10}
            borderRadius={6}
            _hover={{
              bg: "whiteAlpha.400",
            }}
          >
            <InstagramMobileLogo />
          </Link>
          <Flex direction={"column"} cursor={"pointer"} gap={5}>
            <SidebarItems />
          </Flex>
        </Flex>
        <Tooltip
          display={{ base: "block", md: "none" }}
          hasArrow
          label={"Logout"}
          placement="right"
          openDelay={500}
          ml={1}
        >
          <Link
            onClick={handelLogout}
            display={"flex"}
            gap={4}
            p={2}
            w={{ md: "full", base: 10 }}
            borderRadius={6}
            alignItems={"center"}
            _hover={{ bg: "whiteAlpha.400" }}
            justifyContent={{ base: "center", md: "flex-start" }}
            mt={"auto"}
            mb={"5"}
          >
            <IoLogOutOutline size={"25"} />
            <Button
              display={{ base: "none", md: "block" }}
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              isLoading={isLoggingOut}
            >
              Logout
            </Button>
          </Link>
        </Tooltip>
      </Box>
    </>
  );
}

export default Sidebar;

// import { Box, Button, Flex, Link } from "@chakra-ui/react";
// import React from "react";
// import { Link as RouterLink } from "react-router-dom";
// import {
//   InstagramLogo,
//   InstagramMobileLogo,
//   CreatePostLogo,
//   MessagesLogo,
// } from "../../../assets/constants";
// import { GoHomeFill } from "react-icons/go";
// import { CiSearch } from "react-icons/ci";
// import { Avatar, Tooltip } from "@chakra-ui/react";
// import { IoLogOutOutline } from "react-icons/io5";
// import { LuHeart } from "react-icons/lu";
// import { FaFacebookMessenger } from "react-icons/fa6";
// import useLogout from "../../../Hook/useLogout";

// function Sidebar() {
//   const sidebatItem = [
//     { icon: <GoHomeFill size={25} />, text: "Home", link: "/home" },
//     { icon: <CiSearch size={25} />, text: "Search" },
//     { icon: <FaFacebookMessenger size={25} />, text: "Messages" },
//     { icon: <LuHeart size={25} />, text: "Notifications" },
//     { icon: <CreatePostLogo />, text: "CreatePost", link: "" },
//     {
//       icon: <Avatar name="Govind ghosh" src="/profilepic.png" size={"sm"} />,
//       text: "Profile",
//       link: "/user/:username",
//     },
//   ];
//   const { handelLogout, isLoggingOut } = useLogout();

//   return (
//     <>
//       <Box
//         borderRight={"1px solid"}
//         borderColor={"gray.400"}
//         height={"100vh"}
//         position={"sticky"}
//         top={0}
//         left={0}
//         px={{ base: 2, md: 4 }}
//         py={8}
//       >
//         <Flex direction={"column"} height={"full"} w={"full"} gap={10}>
//           <Link
//             as={RouterLink}
//             to={"/home"}
//             cursor={"pointer"}
//             pl={2}
//             display={{ base: "none", md: "block" }}
//           >
//             <InstagramLogo />
//           </Link>
//           <Link
//             as={RouterLink}
//             to={"/home"}
//             cursor={"pointer"}
//             p={2}
//             display={{ base: "block", md: "none" }}
//             w={10}
//             borderRadius={6}
//             _hover={{
//               bg: "whiteAlpha.400",
//             }}
//           >
//             <InstagramMobileLogo />
//           </Link>
//           <Flex direction={"column"} cursor={"pointer"} gap={5}>
//             {sidebatItem.map((item, index) => (
//               <Tooltip
//                 display={{ base: "block", md: "none" }}
//                 key={index}
//                 hasArrow
//                 label={item.text}
//                 placement="right"
//                 openDelay={500}
//                 ml={1}
//               >
//                 <Link
//                   as={RouterLink}
//                   to={item.link || null}
//                   display={"flex"}
//                   gap={4}
//                   p={2}
//                   w={{ md: "full", base: 10 }}
//                   borderRadius={6}
//                   alignItems={"center"}
//                   _hover={{ bg: "whiteAlpha.400" }}
//                   justifyContent={{ base: "center", md: "flex-start" }}
//                 >
//                   {item.icon}
//                   <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
//                 </Link>
//               </Tooltip>
//             ))}
//           </Flex>
//         </Flex>
//         <Tooltip
//           display={{ base: "block", md: "none" }}
//           hasArrow
//           label={"Logout"}
//           placement="right"
//           openDelay={500}
//           ml={1}
//         >
//           <Link
//             onClick={handelLogout}
//             // as={RouterLink}
//             // to={"/"}
//             display={"flex"}
//             gap={4}
//             p={2}
//             w={{ md: "full", base: 10 }}
//             borderRadius={6}
//             alignItems={"center"}
//             _hover={{ bg: "whiteAlpha.400" }}
//             justifyContent={{ base: "center", md: "flex-start" }}
//             mt={"auto"}
//             mb={"5"}
//           >
//             <IoLogOutOutline size={"25"} />
//             <Button
//               display={{ base: "none", md: "block" }}
//               variant={"ghost"}
//               _hover={{ bg: "transparent" }}
//               isLoading={isLoggingOut}
//             >
//               Logout
//             </Button>
//           </Link>
//         </Tooltip>
//       </Box>
//     </>
//   );
// }

// export default Sidebar;
