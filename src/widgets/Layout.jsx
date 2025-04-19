import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className="max-w-[1280px] max-h-[95dvh] overflow-auto w-full mx-auto my-6 bg-white rounded-lg border border-gray-200">
      <Header />

      <div className="flex flex-col items-center justify-center text-center h-[76dvh] px-6 my-2">
        {children}
      </div>

      <Footer />
    </div>
  );
};
