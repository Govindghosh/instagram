import { Avatar, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

function SuggestedHeader() {
  const authUser = useSelector((state) => state.auth.user);

  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          <Link
          //to={`${authUser.username}`}
          //as={RouterLink}
          >
            <Avatar
              src={authUser.profilePicURL}
              name={authUser.fullName}
            ></Avatar>
          </Link>
          <Link
            //as={RouterLink}
            //to={`${authUser.username}`}
            style={{ textDecoration: "none" }}
          >
            <Text fontWeight={"bold"} fontSize={14}>
              {authUser.username}
            </Text>
          </Link>
        </Flex>
        <Link
          className="no-underline"
          as={RouterLink}
          color={"blue.600"}
          fontSize={12}
          fontWeight={"bold"}
          to={"/"}
          style={{ textDecoration: "none" }}
        >
          Switch
        </Link>
      </Flex>
    </>
  );
}

export default SuggestedHeader;
