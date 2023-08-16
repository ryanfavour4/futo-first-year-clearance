import { Routes, Route } from "react-router-dom";
import ContactPage from "../pages/contact";
import HomePage from "../pages/home";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default Routers;
