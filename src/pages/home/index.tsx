import React from "react";
import "../../styles/page/home.css";
import LinkButton from "../../components/ui/LinkButton";

const HomePage = () => {
  return (
    <div className="md:flex h-[calc(100vh-92px)]">
      <div className="bg-futo-school-gate bg-green w-full bg-cover"></div>
      <div className="bg-futo-school-gate-fade w-full text-dark bg-cover h-full flex flex-col items-center justify-center bg-gradient-to-br from-green/10 via-yellow/20 to-light">
        <div className="text-center">
          <div className="text-4xl mb-2 font-bold">
            Welcome Futo Clearance Portal
          </div>
          <div className="text-xl pb-4">
            Futo Clearance Portal is a portal to help students to get clearance
            with ease from any destination
          </div>
          <LinkButton className="px-6" to="/">
            Get Started
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
