import React from "react";
import { Navigate } from "react-router-dom";

type Props = {
  element: JSX.Element;
  validate?: string;
  to?: string;
};

const ProtectedRoute = ({ element, validate, to = "/login" }: Props) => {
  const API_KEY_LOCAL_STORAGE = localStorage.getItem("ApiKey");
  const ValidateItem = validate || API_KEY_LOCAL_STORAGE;
  if (!ValidateItem) {
    return <Navigate to={to} />;
  }

  return element;
};

export default ProtectedRoute;
