import { Box, Flex, IconButton } from "@chakra-ui/react";
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
        <IconButton aria-label="Open Menu" variant="ghost" onClick={onOpen}>
          <FiMenu />
        </IconButton>
        <Box>Books</Box>

        <IconButton aria-label="Search" variant="ghost">
          <FiSearch />
        </IconButton>
      </Flex>
    </>
  );
};
