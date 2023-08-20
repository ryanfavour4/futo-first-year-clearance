// Create the RootStore
import React, { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";

type Props = {
  children: ReactNode;
};

export const RootStore = ({ children }: Props) => {
  return <AuthProvider>{children}</AuthProvider>;
};
