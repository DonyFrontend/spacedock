import Header from "@/widgets/headers/ui/Header";
import { Outlet } from "react-router-dom";
import { ReactParticles } from "@/widgets/particles";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="pt-30">
        <div className="absolute top-0 left-0 -z-10 w-full h-full">
          <ReactParticles />
        </div>
        <div className="text-white m-auto flex flex-col items-center">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
