import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../store/context/UserContext";

type Props = {
  element: JSX.Element;
  to?: string;
  role?: string[];
};

const ProtectedRoute = ({ element, to = "/login", role }: Props) => {
  const { user } = useContext(UserContext);
  const API_KEY_LOCAL_STORAGE = localStorage.getItem("ApiKey");
  if (!API_KEY_LOCAL_STORAGE) {
    return <Navigate to="/login" />;
  }
  if (role && role.length > 0 && user?.student.user_type) {
    if (!role.includes(user?.student.user_type.toLowerCase())) {
      return <Navigate to={to} />;
    }
  }

  return element;
};

export default ProtectedRoute;
