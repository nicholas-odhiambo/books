import { Box, Flex, Input } from "@chakra-ui/react";
import { NavLinks } from "./NavLinks";

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
        <Box>Books</Box>

        {/*nav links */}
        <NavLinks direction="row" />

        {/*search*/}
        <Input
          placeholder="Search books..."
          maxW="250px"
          bg="gray.800"
          border="none"
          _focus={{ bg: "gray.700" }}
        />
      </Flex>
    </>
  );
};
