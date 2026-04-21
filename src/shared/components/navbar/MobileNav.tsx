import { Box, Flex, IconButton } from "@chakra-ui/react";

export const MobileNav = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <>
      <Flex
        display={{ base: "flex", md: "none" }}
        align="center"
        justify="space-between"
        w="100%"
      >
        <IconButton aria-label="Open Menu" onClick={onOpen} variant="ghost" />

        <Box>Books</Box>

        <IconButton aria-label="Search" variant="ghost" />
      </Flex>
    </>
  );
};
