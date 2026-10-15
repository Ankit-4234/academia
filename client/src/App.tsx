import { RouterProvider } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";
import { router } from "./router";

export default function App() {
  return <RouterProvider router={router} fallbackElement={<LoadingSpinner />} />;
}
