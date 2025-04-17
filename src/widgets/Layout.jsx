import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className="max-w-[1280px] w-full mx-auto mt-6 py-6 bg-white rounded-lg border border-gray-200">
      <Header />

      {children}

      <Footer />
    </div>
  );
};
