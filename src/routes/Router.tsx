import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// !! ========= LAYOUT ======= !! //
import Loading from "../components/layout/Loading";
import ScrollToTop from "../components/layout/ScrollToTop";

import ProtectedRoute from "./private/Router";

// ?? =========== OPENED FREE PAGES ======== ?? //
import ContactPage from "../pages/contact";
import Login from "../pages/signups/Login";
import Register from "../pages/signups/Register";
import ForgotPassword from "../pages/signups/ForgotPassword";

// ?? ======== LAZY LOAD API FILLED CONTENT FILLED PAGE TO OPTIMIZE USERS BROWSER SPEED ====== ?? //
const MainMenu = lazy(() => import("../pages/main"));
const Profile = lazy(() => import("../pages/profile"));
const HomePage = lazy(() => import("../pages/home"));

const Routers = () => {
  return (
    <>
      <ScrollToTop>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/main-menu"
              element={
                <ProtectedRoute
                  role={["student", "doa"]}
                  to="/"
                  element={<MainMenu />}
                />
              }
            />
            <Route
              path="/profile"
              element={<ProtectedRoute element={<Profile />} />}
            />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </>
  );
};

export default Routers;
