import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import AppProvider from "./providers";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
  </AppProvider>,
);
