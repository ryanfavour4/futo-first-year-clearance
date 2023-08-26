import React, { ReactNode, createContext, useEffect, useState } from "react";
import { registerObjectType } from "../../pages/signups/Register";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Api, setAxiosToken } from "../../utils/config/Api";
import { loginObjectType } from "../../pages/signups/Login";

type AuthContextType = {
  loading: boolean;
  apiKey: string | null;
  error: boolean;
  message: string;
  forgotPassword: (email: string) => void;
  Register: (registerPayload: registerObjectType) => void;
  login: (loginPayload: loginObjectType) => void;
  logout: () => void;
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
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const API_KEY_LOCAL_STORAGE = localStorage.getItem("ApiKey");

  useEffect(() => {
    setApiKey(API_KEY_LOCAL_STORAGE);
  }, [API_KEY_LOCAL_STORAGE]);

  //????????========================= REGISTER A USER ======================== ??//
  const Register = (registerPayload: registerObjectType) => {
    setLoading(true);
    setError(false);
    setMessage("");
    Api.post("/account/auth/reg/", registerPayload)
      .then((res) => {
        setLoading(false);
        toast.success(res.data.message || "Account Successfully Created");
        navigate("/login");
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        setMessage("An Error Occurred While Registering");
        toast.error(
          err?.username !== undefined
            ? "The Registration number is already in use"
            : err?.email !== undefined
            ? "This email is already in use"
            : err?.non_field_errors !== undefined
            ? "That password is too similar with the email"
            : err?.password1 !== undefined
            ? "That password is too easy to break or hack"
            : "Something Went Wrong ☹, Please Check Your Internet Connection"
        );
      });
  };

  //????????========================= LOGIN A USER ======================== ??//
  const login = (loginPayload: loginObjectType) => {
    setLoading(true);
    setError(false);
    setMessage("");
    Api.post("/account/auth/login/", loginPayload)
      .then((res) => {
        setLoading(false);
        toast.success(res.data.message || "Account Successfully Created");
        setApiKey(res.data.key);
        localStorage.setItem("ApiKey", res.data.key);
        setAxiosToken(res.data.key);
        navigate("/main-menu");
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        setMessage("An Error Occurred Logging In");
        toast.error(
          err?.username !== undefined
            ? "The Registration number is already in use"
            : err?.email !== undefined
            ? "This email is already in use"
            : err?.non_field_errors !== undefined
            ? err?.non_field_errors[0]
            : "Something Went Wrong ☹, Please Check Your Internet Connection"
        );
      });
  };

  //????????========================= FORGOT PASSWORD ======================== ??//
  const forgotPassword = (email: string) => {
    toast("Coming soon... 🕚");
    // setLoading(true);
    // Api.post("/account/auth/password/reset/", { email })
    //   .then((res) => {
    //     setLoading(false);
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //     console.log(err);
    //   });
  };

  //????????========================= LOGOUT A USER ======================== ??//
  const logout = () => {
    navigate("/");
    localStorage.removeItem("ApiKey");
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        apiKey,
        error,
        message,
        login,
        logout,
        Register,
        forgotPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
