import { Stack } from "@chakra-ui/react";
import { navItems } from "./data/NavItems";
import { Link } from "react-router-dom";

interface Props {
  direction: "row" | "column";
  onClick?: () => void;
}

export const NavLinks = ({ direction, onClick }: Props) => {
  return (
    <>
      <Stack direction={direction}>
        {navItems.map((item) => (
          <Link to={item.path} key={item.path} onClick={onClick}>
            {item.label}
          </Link>
        ))}
      </Stack>
    </>
  );
};
