import { LangSelect } from "@/shared/lang/ui/lang-select";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex fixed text-white top-0 w-full z-50 p-3 justify-center items-center backdrop-blur-sm border-b border-b-white">
      <div className="w-350 flex justify-between items-center">
        <Link to="/library">
          <img src="/public/nasa_logo.svg" alt="Logo" className="h-16" />
        </Link>
        <div>
          <LangSelect />
        </div>
      </div>
    </header>
  );
};

export default Header;
