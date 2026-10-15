import type { ComponentType } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Every page except Home is loaded on demand (code splitting).
const page = (loader: () => Promise<{ default: ComponentType }>) => ({
  lazy: async () => ({ Component: (await loader()).default }),
});

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", ...page(() => import("./pages/About")) },
      { path: "programs", ...page(() => import("./pages/Programs")) },
      { path: "programs/:slug", ...page(() => import("./pages/ProgramDetail")) },
      { path: "why-academia", ...page(() => import("./pages/WhyAcademia")) },
      { path: "student-life", ...page(() => import("./pages/StudentLife")) },
      { path: "clubs", ...page(() => import("./pages/Clubs")) },
      { path: "events", ...page(() => import("./pages/Events")) },
      { path: "events/:slug", ...page(() => import("./pages/EventDetail")) },
      { path: "calendar", ...page(() => import("./pages/CalendarPage")) },
      { path: "notices", ...page(() => import("./pages/Notices")) },
      { path: "notices/:slug", ...page(() => import("./pages/NoticeDetail")) },
      { path: "faq", ...page(() => import("./pages/Faq")) },
      { path: "gallery", ...page(() => import("./pages/GalleryPage")) },
      { path: "contact", ...page(() => import("./pages/Contact")) },
      { path: "apply", ...page(() => import("./pages/Apply")) },
      { path: "terms", ...page(() => import("./pages/Terms")) },
      { path: "accessibility", ...page(() => import("./pages/Accessibility")) },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
