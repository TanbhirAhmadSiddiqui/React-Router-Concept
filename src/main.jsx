import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// react router
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Components/Root/Root.jsx";
import About from "./Components/About/About.jsx";
import Blogs from "./Components/Blogs/Blogs.jsx";

// create router
const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello World</div>,
    Component: Root,
    children: [
      { index: true, Component: App },
      { path: "/about", Component: About },
      {
        path: "/blogs",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Blogs,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
