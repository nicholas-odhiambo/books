import { Box, Flex, IconButton, Span } from "@chakra-ui/react";
import { NavLinks } from "./NavLinks";
import { FiSearch } from "react-icons/fi";

export const DesktopNav = () => {
  return (
    <>
      <Flex
        display={{ base: "none", md: "flex" }}
        align="center"
        justify="space-between"
        w="100%"
      >
        {/*logo */}
        <Box>
          Book<Span color={"red"}>s</Span>
        </Box>

        {/*nav links */}
        <NavLinks direction="row" />

        {/*search button*/}
        <IconButton>
          <FiSearch />
        </IconButton>
      </Flex>
    </>
  );
};
