import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="p-6">
      <div className="flex items-center justify-center gap-5">
        <Link
          className="font-bold text-white transition border-b border-transparent duration-400 font-body hover:text-gray-200 hover:border-gray-300"
          to="/"
        >
          Главная
        </Link>

        <Link
          className="font-bold text-white transition border-b border-transparent duration-400 font-body hover:text-gray-200 hover:border-gray-300"
          to="/hiragana"
        >
          Хирагана
        </Link>

        <Link
          className="font-bold text-white transition border-b border-transparent duration-400 font-body hover:text-gray-200 hover:border-gray-300"
          to="/katakana"
        >
          Катакана
        </Link>
      </div>
    </header>
  );
};
