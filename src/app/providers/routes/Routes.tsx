import { RoutesObject } from "@/shared/config/router.config";
import Header from "@/widgets/headers/ui/Header";
import { LoadingScreen } from "@/shared/ui/loading-screen";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const RoutesComponent = () => {
  return (
    <div className="text-white">
      <Header />
      <Suspense fallback={<LoadingScreen message="Loading page..." />}>
        <Routes>
          {Object.values(RoutesObject).map((route, index) => (
            <Route path={route.path} element={route.element} key={index} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

export { RoutesComponent };
