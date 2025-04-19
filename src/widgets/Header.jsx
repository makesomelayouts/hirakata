import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  let location = useLocation();

  return (
    <header className="sticky top-0 left-0 right-0 p-6 ">
      <div className="flex items-center justify-center gap-5">
        <Link
          className={`${
            location.pathname === "/"
              ? "bg-[#5B3569] px-6 py-2 rounded-full"
              : ""
          } font-bold text-white transition border-b-2 md:text-xl duration-400 font-body border-transparent hover:text-gray-200 hover:border-gray-300`}
          to="/"
        >
          Главная
        </Link>

        <Link
          className={`${
            location.pathname === "/hiragana"
              ? "bg-[#5B3569] px-6 py-2 rounded-full"
              : ""
          } font-bold text-white transition border-b-2 md:text-xl duration-400 font-body border-transparent hover:text-gray-200 hover:border-gray-300`}
          to="/hiragana"
        >
          Хирагана
        </Link>

        <Link
          className={`${
            location.pathname === "/katakana"
              ? "bg-[#5B3569] px-6 py-2 rounded-full"
              : ""
          } font-bold text-white transition border-b-2 md:text-xl duration-400 font-body border-transparent hover:text-gray-200 hover:border-gray-300`}
          to="/katakana"
        >
          Катакана
        </Link>
      </div>
    </header>
  );
};
