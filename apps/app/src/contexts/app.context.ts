import { createContext } from "react";
import { App } from "@app/types";

export const AppContext = createContext<App | null>(null);
export const AppProvider = AppContext.Provider;