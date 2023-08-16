import React from "react";
import "../../styles/page/contact.css";

const ContactPage = () => {
  return (
    <div>
      <div className="bg-wave-top p-6 bg-no-repeat min-h-[400px] bg-cover">
        <div className="wrapper">
          <div className="flex flex-col md:flex-row">
            <div className="bg-white p-6 rounded-t-md md:rounded-none md:rounded-l-md w-full"></div>
            <div className="bg-sky-blue p-6 rounded-b-md md:rounded-none md:rounded-r-md w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
