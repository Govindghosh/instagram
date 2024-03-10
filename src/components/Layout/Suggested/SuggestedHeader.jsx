import { Avatar, Flex, Button, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
//import { Link as RouterLink } from "react-router-dom";
import useLogout from "../../../Hook/useLogout";

function SuggestedHeader() {
  const authUser = useSelector((state) => state.auth.user);
  const { handelLogout, isLoggingOut } = useLogout();

  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          <Avatar
            src={authUser?.profilePicURL}
            name={authUser?.fullName}
          ></Avatar>
          <Text fontWeight={"bold"} fontSize={14}>
            {authUser?.fullName}
          </Text>
        </Flex>
        <Button
          className="no-underline"
          color={"blue.600"}
          fontSize={12}
          fontWeight={"bold"}
          onClick={handelLogout}
          style={{ textDecoration: "none" }}
          isLoading={isLoggingOut}
          bg={"transparent"}
          _hover={{ bg: "transparent" }}
        >
          Switch
        </Button>
      </Flex>
    </>
  );
}

export default SuggestedHeader;
