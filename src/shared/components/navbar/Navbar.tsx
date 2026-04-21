import { Box, Flex } from "@chakra-ui/react";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { MobileDrawer } from "./MobileDrawer";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <Box
        background="black"
        position="sticky"
        px={6}
        top={0}
        zIndex="1000"
        color="white"
      >
        <Flex align="center" justify="space-between" h="60px">
          {/*Mobile navbar*/}
          <MobileNav onOpen={onOpen} />
          {/* desktop navbar*/}
          <DesktopNav />
        </Flex>
        {/*drawer */}
        <MobileDrawer isOpen={isOpen} onClose={onClose} />
      </Box>
    </>
  );
};
