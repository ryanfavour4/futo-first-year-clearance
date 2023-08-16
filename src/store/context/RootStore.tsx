// Create the RootStore
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const RootStore = ({ children }: Props) => {
  return <>{children}</>;
};
