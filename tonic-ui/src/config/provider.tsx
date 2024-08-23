import { TamaguiProvider } from "@tamagui/core";
import { FC, PropsWithChildren } from "react";

import { config } from "./config";

export const TonicUIProvider: FC<PropsWithChildren> = ({ children }) => (
  <TamaguiProvider config={config} defaultTheme={"light"}>
    {children}
  </TamaguiProvider>
);
