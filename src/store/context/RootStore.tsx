// Create the RootStore
import React, { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";
import { UserProvider } from "./UserContext";
import { ReferenceProvider } from "./ReferenceContext";
import { SectionProvider } from "./SectionContext";

type Props = {
    children: ReactNode;
};

export const RootStore = ({ children }: Props) => {
    return (
        <AuthProvider>
            <UserProvider>
                <SectionProvider>
                    <ReferenceProvider>{children}</ReferenceProvider>
                </SectionProvider>
            </UserProvider>
        </AuthProvider>
    );
};
