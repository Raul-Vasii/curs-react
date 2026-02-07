import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import { Users } from "./32/users.jsx";
import { Component } from "react";
import { Posts } from "./32/posts.jsx";
import { PostDetails } from "./32/post-details.jsx";

// 1. Variabila router
// createBrowserRouter - ne permite sa definim un array de rute
// fiecare obiect din array are:
// 1. path = pathname din (window.location) -
// conponent - componenta react care va fi randata

// if (path === window.location.pathname) {
//     return Component
// }

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
   {
    path: "/users",
    Component: Users,
  },
  {
    path: "/posts",
    Component: Posts,
  },
  {
    path: "/posts/:postId",
    Component: PostDetails,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
