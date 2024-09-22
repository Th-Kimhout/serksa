import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout.jsx";
import InstructorPage from "./pages/instructorPage/InstructorPage.jsx";
import CoursePage from "./pages/coursePage/CoursePage.jsx";
import AboutPage from "./pages/aboutpage/AboutPage.jsx";
import MyLearning from "./pages/watchLater/WatchLater.jsx";
import Login from "./pages/auth/Login.jsx";
import Verify from "./pages/auth/Verify.jsx";
import { CategoryCard } from "./components/cards/CategoryCard.jsx";
import CoursePreview from "./pages/courseWYL/CourseWYL.jsx";
import Started from "./pages/started/Started.jsx";
import { EditInfo } from "./pages/auth/SettingEditInfo.jsx";
import { ChangePW } from "./pages/auth/SettingChangePW.jsx";
import { SettingChangeEmail } from "./pages/auth/SettingChangeEmail.jsx";
import { SettingDeleteAcc } from "./pages/auth/SettingDeleteAcc.jsx";
import WatchLater from "./pages/watchLater/WatchLater.jsx";
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
        path: "/CoursePreview",
        element: <CoursePreview />,
      },
      {
        path: "/Started",
        element: <Started />,
      },
      {
        path: "/EditInfo",
        element: <EditInfo />,
      },
      {
        path: "/ChangePW",
        element: <ChangePW />,
      },
      {
        path: "/SettingChangeEmail",
        element: <SettingChangeEmail />,
      },
      {
        path: "/SettingDeleteAcc",
        element: <SettingDeleteAcc />,
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
