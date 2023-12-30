import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import { useIdToken } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/firebaseConfig";

function PageLayout({ children }) {
  const { pathname } = useLocation();
  const [user, loading, error] = useIdToken(auth);
  const showSidebar = ["/", "/signup"].includes(pathname);
  const canRenderSidebar = !showSidebar && user;

  return (
    <Flex>
      {canRenderSidebar && (
        <Box w={{ base: "80px", md: "240px" }}>
          <Sidebar />
        </Box>
      )}
      <Box flex={1} ml={{ base: "calc(100%-80px)", md: "calc(100%-240px)" }}>
        {children}
      </Box>
    </Flex>
  );
}

export default PageLayout;
