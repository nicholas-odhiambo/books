import {
  Box,
  Button,
  Container,
  Grid,
  SimpleGrid,
  Span,
  Text,
} from "@chakra-ui/react";
import BannerImage from "@/images/hero-image.jpg";

export const HomeBanner = () => {
  return (
    <>
      <Box
        position="relative"
        bgImage={`url(${BannerImage})`}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPos="left"
        minH="100vh"
      >
        {/* Dark overlay */}
        <Box position="absolute" inset="0" bg="blackAlpha.700" zIndex="1" />

        {/* Gradient overlay */}
        <Box
          position="absolute"
          inset="0"
          bgGradient="linear(to-r, blackAlpha.800, blackAlpha.400)"
          zIndex="2"
        />

        <Container
          maxW="6xl"
          position="relative"
          zIndex="3"
          py={{ base: 20, md: 32 }}
        >
          <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={10}>
            <SimpleGrid gap={6} maxW="500px">
              <Text
                color="white"
                fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
                fontWeight="bold"
                lineHeight="1.1"
              >
                Welcome to Book<Span color="red">s</Span> where every page opens
                a new world.
              </Text>

              <Text fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.800">
                Whether you love reading for fun or learning something new, Book
                <Span color="red">s</Span> makes your reading journey simple,
                enjoyable, and full of endless possibilities.
              </Text>

              <Button
                size="lg"
                colorScheme="red"
                w={{ base: "full", sm: "fit-content" }}
              >
                Get Started
              </Button>
            </SimpleGrid>

            <SimpleGrid></SimpleGrid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
