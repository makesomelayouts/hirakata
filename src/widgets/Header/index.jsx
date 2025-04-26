import { useLocation } from "react-router-dom";
import { TransitionLink } from "@/shared/TransitionLink";
import { MobileHeader } from "./mobileHeader";

export const Header = () => {
  let location = useLocation();

  return (
    <>
      <MobileHeader />
      <header className="relative z-10 md:p-6 max-md:hidden">
        <img
          src="https://github.com/maxelonej/hirakata-website/blob/main/src/assets/%D0%97%D0%B0%D1%82%D0%B5%D0%BC%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BF%D0%BE%D0%B4%20%D1%88%D0%B0%D0%BF%D0%BA%D1%83.png?raw=true"
          className="absolute top-0 left-0 w-full -z-20 h-64 pointer-events-none"
        />

        <div className="flex items-center justify-center gap-5 max-md:hidden">
          <TransitionLink
            className={`${
              location.pathname === "/"
                ? "bg-[#5B3569] px-6 py-2 rounded-full"
                : ""
            } font-bold text-white transition border-b-2 md:text-xl duration-400 font-body border-transparent hover:text-gray-200 hover:border-gray-300`}
            to="/"
          >
            Главная
          </TransitionLink>

          <TransitionLink
            className={`${
              location.pathname === "/hiragana"
                ? "bg-[#5B3569] px-6 py-2 rounded-full"
                : ""
            } font-bold text-white transition border-b-2 md:text-xl duration-400 font-body border-transparent hover:text-gray-200 hover:border-gray-300`}
            to="/hiragana"
          >
            Хирагана
          </TransitionLink>

          <TransitionLink
            className={`${
              location.pathname === "/katakana"
                ? "bg-[#5B3569] px-6 py-2 rounded-full"
                : ""
            } font-bold text-white transition border-b-2 md:text-xl duration-400 font-body border-transparent hover:text-gray-200 hover:border-gray-300`}
            to="/katakana"
          >
            Катакана
          </TransitionLink>

          {/* 
        <TransitionLink
          className={`${
            location.pathname === "/criteria"
              ? "bg-[#5B3569] px-6 py-2 rounded-full"
              : ""
          } font-bold text-white transition border-b-2 md:text-xl duration-400 font-body border-transparent hover:text-gray-200 hover:border-gray-300`}
          to="/criteria"
        >
          Критерии оценивания
        </TransitionLink> */}

          <TransitionLink
            className={`${
              location.pathname === "/resources"
                ? "bg-[#5B3569] px-6 py-2 rounded-full"
                : ""
            } font-bold text-white transition border-b-2 md:text-xl duration-400 font-body border-transparent hover:text-gray-200 hover:border-gray-300`}
            to="/resources"
          >
            Полезные ресурсы
          </TransitionLink>
        </div>
      </header>
    </>
  );
};
