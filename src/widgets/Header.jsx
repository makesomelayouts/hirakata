import { useLocation } from "react-router-dom";
import { TransitionLink } from "@/shared/TransitionLink";

export const Header = () => {
  let location = useLocation();

  return (
    <header className="relative z-10 p-6">
      {/* <div
        className="absolute top-0 left-0 w-full -z-20 h-64"
        style={{
          background:
            "linear-gradient(1.59deg, rgba(125, 88, 129, 0) 1.35%, rgba(0, 0, 0, 0.75) 98.65%)",
        }}
      /> */}

      <img
        src="/src/assets/Затемнение под шапку.png"
        className="absolute top-0 left-0 w-full -z-20 h-64"
      />

      <div className="flex items-center justify-center gap-5">
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
      </div>
    </header>
  );
};
