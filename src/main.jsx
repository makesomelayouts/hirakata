import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Hiragana } from "@/pages/Hiragana";
import { Katakana } from "@/pages/Katakana";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/hiragana", element: <Hiragana /> },
  { path: "/katakana", element: <Katakana /> },
  { path: "*", element: <Home /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
