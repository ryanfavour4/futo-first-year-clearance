// Create the RootStore
import React, { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";
import { UserProvider } from "./UserContext";

type Props = {
  children: ReactNode;
};

export const RootStore = ({ children }: Props) => {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  );
};
