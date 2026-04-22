import { Outlet } from "react-router-dom";
import { Navbar } from "../shared/components/navbar/Navbar";

export const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
