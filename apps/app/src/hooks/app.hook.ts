import { AppContext } from "@app/contexts";
import { useContext } from "react";

export const useApp = () => {
  const app = useContext(AppContext);

  if (!app) {
    throw new Error("useApp must be used within an AppProvider");
  }

  return app;
};