import {
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerRoot,
  VStack,
} from "@chakra-ui/react";
import { NavLinks } from "./NavLinks";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <>
      <DrawerRoot open={isOpen} onOpenChange={(e) => !e.open && onClose()}>
        <DrawerBackdrop />
        <DrawerContent bg={"gray.900"}>
          <DrawerBody mt={10}>
            <VStack align="start">
              <NavLinks direction="column" onClick={onClose} />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </DrawerRoot>
    </>
  );
};
