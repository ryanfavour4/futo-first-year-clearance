import { Routes, Route } from "react-router-dom";
import ContactPage from "../pages/contact";
import HomePage from "../pages/home";
import ProtectedRoute from "./private/Router";
import MainMenu from "../pages/main";
import ScrollToTop from "../components/layout/ScrollToTop";
import Login from "../pages/signups/Login";
import Register from "../pages/signups/Register";

const Routers = () => {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/main-menu"
            element={<ProtectedRoute element={<MainMenu />} />}
          />
        </Routes>
      </ScrollToTop>
    </>
  );
};

export default Routers;
