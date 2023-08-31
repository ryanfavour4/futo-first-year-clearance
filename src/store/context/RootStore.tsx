// Create the RootStore
import React, { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";
import { UserProvider } from "./UserContext";
import { ReferenceProvider } from "./ReferenceContext";

type Props = {
  children: ReactNode;
};

export const RootStore = ({ children }: Props) => {
  return (
    <AuthProvider>
      <UserProvider>
        <ReferenceProvider>{children}</ReferenceProvider>
      </UserProvider>
    </AuthProvider>
  );
};
