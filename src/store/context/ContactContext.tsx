import React, { ReactNode, createContext } from "react";

// ??______________________________________ CONTACT CONTEXT TYPES _________________________________________?? //
type Props = {
  children: ReactNode;
};

type ContactContextType = {};

// ??______________________________________ CONTACT CONTEXT PROVIDER _________________________________________?? //
export const ContactContext = createContext<ContactContextType>(
  [] as unknown as ContactContextType
);

export const ContactProvider = ({ children }: Props) => {
  return (
    <ContactContext.Provider value={""}>{children}</ContactContext.Provider>
  );
};
