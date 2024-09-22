import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout.jsx";
import InstructorPage from "./pages/instructorPage/InstructorPage.jsx";
import CoursePage from "./pages/coursePage/CoursePage.jsx";
import AboutPage from "./pages/aboutpage/AboutPage.jsx";
import WatchLater from "./pages/watchLater/WatchLater.jsx";
import Login from "./pages/auth/Login.jsx";
import Verify from "./pages/auth/Verify.jsx";
import { CategoryCard } from "./components/Cards/CategoryCard.jsx";
import CourseDetail from "./pages/courseDetail/CourseDetail.jsx";
import Started from "./pages/started/Started.jsx";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/instructorPage",
        element: <InstructorPage />,
      },
      {
        path: "/coursePage",
        element: <CoursePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/verify",
        element: <Verify />,
      },
      {
        path: "/AboutPage",
        element: <AboutPage />,
      },
      {
        path: "/watchLater",
        element: <WatchLater />,
      },
      {
        path: "/Category",
        element: <CategoryCard />,
      },

      {
        path: "/Started",
        element: <Started />,
      },
      {
        path: "/course-detail/:id",
        element: <CourseDetail />,
      },
      {
        path: "/Started",
        element: <Started />,
      },
    ],
  },
]);

const helmetContext = {};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider context={helmetContext}>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
