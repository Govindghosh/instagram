import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { InstagramLogo, InstagramMobileLogo, CreatePostLogo, MessagesLogo, NotificationsLogo } from "../../../assets/constants";
import { GoHomeFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { Avatar, Tooltip} from "@chakra-ui/react";


function Sidebar() {
  const sidebatItem = [
    { icon: <GoHomeFill size={25} />, text: "Home", link: "/home" },
    { icon: <CiSearch size={25} />, text: "Search" },
    { icon: <MessagesLogo />, text: "Messages" },
    { icon: <NotificationsLogo />, text: "Notifications" },
    { icon: <CreatePostLogo />, text: "CreatePost", link: "" },
    {
      icon: <Avatar name="Govind ghosh" src="/profilepic.png" size={"sm"} />,
      text: "Profile",
      link: "",
    },
  ];
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
            <Flex
            direction={"column"}
            cursor={"pointer"}
            gap={5}
            >
              {sidebatItem.map((item, index)=>(
                <Tooltip
                display={{base: "block", md:"none"}}
                key={index}
                hasArrow
                label={item.text}
                placement="right"
                openDelay={500}
                ml={1}
                >
                  <Link
                  as={RouterLink}
                  to={item.link || null}
                  display={"flex"}
                  gap={4}
                  p={2}
                  w={{md:"full",base:10}}
                  borderRadius={6}
                  alignItems={"center"}
                  _hover={{bg:"whiteAlpha.400"}}
                  justifyContent={{base:"center", md:"flex-start"}}
                  >
                  {item.icon}
                  <Box display={{base:"none", md:"block"}}>{item.text}</Box>
                  </Link>
                </Tooltip>
              )

              )}
            </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Sidebar;
