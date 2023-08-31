import React, { ReactNode, createContext, useState } from "react";
import countriesList from "../countries.json";

type ReferenceContextType = {
  gender: string[];
  countries: {
    code: string;
    name: string;
  }[];
};

export const ReferenceContext = createContext<ReferenceContextType>(
  [] as unknown as ReferenceContextType
);

type Props = {
  children: ReactNode;
};

export const ReferenceProvider = ({ children }: Props) => {
  const [countries] = useState(countriesList);
  const [gender] = useState<string[]>([
    "Male",
    "Female",
    "Non-binary",
    "Transgender",
    "Agender",
    "Genderqueer",
    "Genderfluid",
    "Two-Spirit",
    "Cisgender",
    "Other"
  ]);

  return (
    <ReferenceContext.Provider value={{ gender, countries }}>
      {children}
    </ReferenceContext.Provider>
  );
};
