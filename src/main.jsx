import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CoursePreview from "../src/services/auth/CoursePreview.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import RootLayout from "./components/layouts/RootLayout.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       {
//         path: "/",
//         element: <App />,
//       },
//       {
//         path: "/Preview",
//         element: <CoursePreview />,
//       },
//     ],
//   },
// ]);
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );


const router = createBrowserRouter([
  {
    path: "/",
    element: <CoursePreview />,
  },
  {
    path: "/Preview",
    element: <CoursePreview />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

