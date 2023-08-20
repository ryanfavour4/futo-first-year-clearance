import React, { ReactNode, createContext, useEffect, useState } from "react";
import { registerObjectType } from "../../pages/signups/Register";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Api } from "../../utils/functions/Api";
import { loginObjectType } from "../../pages/signups/Login";

type AuthContextType = {
  loading: boolean;
  Register: (registerPayload: registerObjectType) => void;
  login: (loginPayload: loginObjectType) => void;
  logout: () => void;
  apiKey: string | null;
};

export const AuthContext = createContext<AuthContextType>(
  [] as unknown as AuthContextType
);

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const API_KEY_LOCAL_STORAGE = localStorage.getItem("ApiKey");

  useEffect(() => {
    setApiKey(API_KEY_LOCAL_STORAGE);
  }, [API_KEY_LOCAL_STORAGE]);

  //????????========================= REGISTER A USER ======================== ??//
  const Register = (registerPayload: registerObjectType) => {
    setLoading(true);
    Api.post("/account/auth/reg/", registerPayload)
      .then((res) => {
        setLoading(false);
        toast.success(res.data.message || "Account Successfully Created");
        navigate("/login");
      })
      .catch((err) => {
        setLoading(false);
        toast.error(
          err.message || err?.username
            ? "The Registration number is already in use"
            : err?.email
            ? "This email is already in use"
            : err?.non_field_errors
            ? "That password is too similar with the email"
            : "Something Went Wrong ☹"
        );
      });
  };

  //????????========================= LOGIN A USER ======================== ??//
  const login = (loginPayload: loginObjectType) => {
    setLoading(true);
    Api.post("/account/auth/login/", loginPayload)
      .then((res) => {
        setLoading(false);
        toast.success(res.data.message || "Account Successfully Created");
        setApiKey(res.data.key);
        localStorage.setItem("ApiKey", res.data.key);
        navigate("/main-menu");
      })
      .catch((err) => {
        setLoading(false);
        toast.error(
          err.message || err?.username
            ? "The Registration number is already in use"
            : err?.email
            ? "This email is already in use"
            : err?.non_field_errors
            ? "That password is too similar with the email"
            : "Something Went Wrong ☹"
        );
      });
  };

  //????????========================= LOGOUT A USER ======================== ??//
  const logout = () => {
    navigate("/");
    localStorage.removeItem("ApiKey");
  };

  return (
    <AuthContext.Provider value={{ loading, login, logout, Register, apiKey }}>
      {children}
    </AuthContext.Provider>
  );
};
