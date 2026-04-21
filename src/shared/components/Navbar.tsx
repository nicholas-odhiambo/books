import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Box>
        <Container>
          <Flex>
            <Box>
              <Text>Books</Text>
            </Box>
            <Box>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </Box>
            <Box></Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};
