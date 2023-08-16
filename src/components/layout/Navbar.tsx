import React, { useEffect, useState } from "react";
import Img from "../ui/Img";
import logo from "../../assets/images/futo-logo.png";
import { NavLink } from "react-router-dom";
import OutlineLink from "../ui/OutlineLink";
import { ReactComponent as MenuIcon } from "../../assets/svg/hamburger-menu.svg";
import { ReactComponent as CloseIcon } from "../../assets/svg/close-x.svg";
import LinkButton from "../ui/LinkButton";
import "../../styles/components/Navbar.css";

const Navbar = () => {
  const { navClassName, handleToggleNavOpen } = useNavbar();

  return (
    <>
      <div className="bg-green text-white p-2 sticky top-0 z-50">
        <div className="wrapper">
          <nav className="flex items-center justify-between">
            <div className="text-lg font-semibold flex items-center gap-4">
              <Img src={logo} alt="logo" width={"70"} />
              <p className="max-w-[15rem]">
                Federal University of Technology Owerri
              </p>
            </div>
            <ul className="hidden md:flex items-center font-medium space-x-4">
              <li className="hover:text-yellow cursor-pointer">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="hover:text-yellow cursor-pointer">
                <NavLink to="/">Home</NavLink>
              </li>
            </ul>
            <OutlineLink className="hidden md:inline-block" to="/">
              Get Started
            </OutlineLink>
            {/* //??============== MOBILE NAVBAR ==================??// */}
            <MenuIcon
              onClick={handleToggleNavOpen}
              className="w-12 cursor-pointer text-light md:hidden"
            />
            <div
              className={`md:hidden z-10 fixed bg-white text-green left-0 right-0 top-0 bottom-0 ${navClassName}`}
            >
              <div
                onClick={handleToggleNavOpen}
                className="flex items-center justify-end p-3"
              >
                <CloseIcon className="w-10 cursor-pointer" />
              </div>
              <nav className="min-h-[600px] flex flex-col items-center justify-center text-center">
                <ul
                  onClick={handleToggleNavOpen}
                  className="flex flex-col gap-8"
                >
                  <li className="hover:text-yellow text-lg cursor-pointer">
                    <NavLink to="/">Home</NavLink>
                  </li>
                </ul>
                <LinkButton className="mt-4" to="/">
                  Get Started
                </LinkButton>
              </nav>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;

export const useNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navClassName, setNavClassName] = useState("mobile-nav-component");

  const handleToggleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    setNavClassName(
      isNavOpen ? "mobile-nav-component-open" : "mobile-nav-component"
    );
  }, [isNavOpen]);

  return { navClassName, handleToggleNavOpen };
};
