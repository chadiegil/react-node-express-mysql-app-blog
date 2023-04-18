import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Root from "./routes/root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import ErrorPage from "./ErrorPage";
import User from "./components/User/User";
import About from "./components/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "user/:id",
        element: <User />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
