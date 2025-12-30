import Header from "@/widgets/headers/ui/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="pt-30">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
