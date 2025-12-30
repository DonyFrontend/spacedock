import { Welcome } from "@/pages/welcome-page";
import { RoutesObject } from "@/shared/config/router.config";
// import { Footer } from "@/widgets/footer";
// import { Header } from "@/widgets/header";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route element={<Layout />}>
        {Object.values(RoutesObject).map((route, index) => (
          <Route path={route.path} element={route.element} key={index} />
        ))}
      </Route>
    </Routes>
  );
};

export { RoutesComponent };
