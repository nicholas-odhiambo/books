import { Box, Container, Grid, SimpleGrid, Span, Text } from "@chakra-ui/react";

export const HomeBanner = () => {
  return (
    <>
      <Box
        background="linear-gradient(to right,  #1d2824, #31423d)"
        minH="100vh"
        pt={{ base: "50px", md: "70px" }}
      >
        <Container maxW="6xl" pt="10px">
          <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
            <SimpleGrid>
              <Text
                color="#ffffff"
                fontSize={{ base: "2xl", md: "4xl", lg: "4xl" }}
                lineHeight={1.1}
              >
                Welcome to Book<Span color="red">s</Span> where every page opens
                a new world.
              </Text>
              <Text as="p" color="#ffffff">
                Whether you love reading for fun or learning something new, Book
                <Span color="red">s</Span> makes your reading journey simple,
                enjoyable, and full of endless possibilities.
              </Text>
            </SimpleGrid>
            <SimpleGrid>2</SimpleGrid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
