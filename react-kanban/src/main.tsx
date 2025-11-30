import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRouter.tsx";
import { AppProvider } from "./context/AppProvider.tsx";
import { VoiceProvider } from "./context/VoiceProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <VoiceProvider>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </VoiceProvider>
  </StrictMode>
);
