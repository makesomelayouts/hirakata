import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="p-6">
      <div className="flex items-center justify-center gap-5">
        <Link
          className="font-bold text-white font-body font-stalinist hover:text-gray-200"
          to="/"
        >
          Главная
        </Link>

        <Link
          className="font-bold text-white font-body hover:text-gray-200"
          to="/hiragana"
        >
          Хирагана
        </Link>

        <Link
          className="font-bold text-white font-body hover:text-gray-200"
          to="/katakana"
        >
          Катакана
        </Link>
      </div>
    </header>
  );
};
