import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ArticlePage from "./pages/ArticlePage.jsx";
import Home from "./pages/Home.jsx";
import DashboardLayout from "./pages/Dashboard.jsx";
import DashboardHome from "./components/DashboardHome.jsx";
import FashionPosts from "./pages/FashionPosts.jsx";
import ContentEditor from "./components/Editor.jsx";
import SignIn from "./pages/SignIn.jsx";
import Register from "./pages/Register.jsx";
import LifeStyle from "./pages/LifeStyle.jsx";
import Gadgets from "./pages/Gadgets.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error</div>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/:title", element: <ArticlePage /> },
      { path: "/category/fashion", element: <FashionPosts /> },
      { path: "/category/lifestyle", element: <LifeStyle/> },
      {
        path:"category/gadgets",
        element: <Gadgets />
      },
      
    ],
  },
  {
    path: "/signin",
    element: <SignIn/>, 
  },
  {
    path: "/register",
    element: <Register/>, 
  },



  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard", element: <DashboardHome /> },
      {
        path: "/dashboard/create-article",
        element: <ContentEditor />,
      },
    ],
  },
]
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
