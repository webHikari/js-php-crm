import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Index } from "pages";
import { App } from "../App.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/",
        element: <Index />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
