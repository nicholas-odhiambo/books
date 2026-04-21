import { Box, Flex, IconButton, Span } from "@chakra-ui/react";
import { FiMenu, FiSearch } from "react-icons/fi";

export const MobileNav = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <>
      <Flex
        display={{ base: "flex", md: "none" }}
        align="center"
        justify="space-between"
        w="100%"
      >
        <IconButton aria-label="Open Menu" onClick={onOpen}>
          <FiMenu />
        </IconButton>
        <Box>
          Book<Span color={"red"}>s</Span>
        </Box>

        <IconButton aria-label="Search">
          <FiSearch />
        </IconButton>
      </Flex>
    </>
  );
};
