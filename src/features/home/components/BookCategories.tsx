import { Box, Container, Text } from "@chakra-ui/react";

export const BookCategories = () => {
  return (
    <>
      <Box>
        <Container maxW={"6xl"} py={{ base: 10, md: 22 }}>
          <Box>
            <Text display={"flex"} justifyContent={"right"}>
              Book Category
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
};
