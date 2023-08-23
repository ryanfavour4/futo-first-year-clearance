import { Routes, Route } from "react-router-dom";
import ContactPage from "../pages/contact";
import HomePage from "../pages/home";
import ProtectedRoute from "./private/Router";
import MainMenu from "../pages/main";
import ScrollToTop from "../components/layout/ScrollToTop";
import Login from "../pages/signups/Login";
import Register from "../pages/signups/Register";
import ForgotPassword from "../pages/signups/ForgotPassword";
import Profile from "../pages/profile";

const Routers = () => {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/main-menu"
            element={<ProtectedRoute element={<MainMenu />} />}
          />
          <Route
            path="/profile"
            element={<ProtectedRoute element={<Profile />} />}
          />
        </Routes>
      </ScrollToTop>
    </>
  );
};

export default Routers;
