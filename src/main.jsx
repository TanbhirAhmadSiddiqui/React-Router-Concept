import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// react router
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

// create router
const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello World</div>,
    Component: App,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
