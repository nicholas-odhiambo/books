import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export const BookCategories = () => {
  return (
    <>
      <Box w="100%" py={8}>
        <Box maxW="6xl" mx="auto" px={6}>
          <Flex justify="space-between" align="center" mb={4}>
            <Heading size="md">Book Categories</Heading>
            <Text fontSize="sm" cursor="pointer">
              See all →
            </Text>
          </Flex>

          {/* Carousel */}
          <Flex
            gap={4}
            overflowX="auto"
            pb={2}
            css={{
              scrollBehavior: "smooth",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          ></Flex>
        </Box>
      </Box>
    </>
  );
};
