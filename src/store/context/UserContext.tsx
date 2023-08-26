import React, { ReactNode, createContext, useEffect, useState } from "react";
import { Api, setAxiosToken } from "../../utils/config/Api";
import { IStudent } from "../../types/students.type";

type UserContextType = {
  user: IStudent | null;
  loading: boolean;
  error: boolean;
  message: string;
  getUserProfile: () => void;
  clearUserProfile: () => void;
};

export const UserContext = createContext<UserContextType>(
  [] as unknown as UserContextType
);

type Props = {
  children: ReactNode;
};

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<IStudent | null>(null);
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const API_KEY_LOCAL_STORAGE = localStorage.getItem("ApiKey");

  useEffect(() => {
    setApiKey(API_KEY_LOCAL_STORAGE);
  }, [API_KEY_LOCAL_STORAGE]);

  //????????========================= GET USERS ( STUDENT ) PROFILE ======================== ??//
  const getUserProfile = () => {
    setLoading(true);
    setError(false);
    setMessage("");
    if (apiKey) setAxiosToken(apiKey);
    Api.get("/student/profile/")
      .then((res) => {
        setLoading(false);
        setMessage("");
        setUser(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        setMessage("An Error Occurred While Registering");
      });
  };

  //????????========================= CLEAR USERS ( STUDENT ) PROFILE ======================== ??//
  const clearUserProfile = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        user,
        error,
        message,
        getUserProfile,
        clearUserProfile
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
