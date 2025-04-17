import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="px-6">
      <div className="flex justify-center items-center gap-5">
        <Link className="text-blue-500 hover:text-blue-600" to="/">
          Главная
        </Link>

        <Link className="text-blue-500 hover:text-blue-600" to="/hiragana">
          Хирагана
        </Link>

        <Link className="text-blue-500 hover:text-blue-600" to="/katakana">
          Катакана
        </Link>
      </div>
    </header>
  );
};
