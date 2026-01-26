import React from "react";
import { Link } from "react-router-dom";

export type NavigationProps = {
  text: string;
  to: string;
};

const Navigation = ({ data }: { data: NavigationProps[] }) => {
  return (
    <nav className="flex fixed top-[88.1px] p-1 left-0 w-full justify-center gap-x-10 items-center bg-gray-700">
      {data.map((item, index) => (
        <Link key={index} to={item.to}>
          <p className="underline hover:no-underline cursor-pointer text-white text-[20px]">
            {item.text}
          </p>
        </Link>
      ))}
    </nav>
  );
};

export default React.memo(Navigation);
