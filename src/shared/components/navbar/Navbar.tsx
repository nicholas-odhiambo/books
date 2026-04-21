import { Box, Flex } from "@chakra-ui/react";
import { DesktopNav } from "./DesktopNav";

export const Navbar = () => {
  return (
    <>
      <Box
        background="black"
        position="sticky"
        px={6}
        top={0}
        zIndex="1000"
        color="white"
      >
        <Flex align="center" justify="space-between" h="60px">
          {/*Mobile navbar*/}

          {/* desktop navbar*/}
          <DesktopNav />
        </Flex>
      </Box>
    </>
  );
};
