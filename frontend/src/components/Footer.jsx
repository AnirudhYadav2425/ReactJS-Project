import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-10">
      <p className="flex gap-5 justify-center mb-1">
        <span>Conditions of Use & Sale</span>
        <span>Privacy Notice</span>
        <span>
          Contact us :{" "}
          <a href="mailto: demo.user@gmail.com" className="underline">
            demo.user@gmail.com
          </a>
        </span>
      </p>
      <p>&copy; 2003-2025, Qshop.com, Inc. or its affiliates</p>
    </footer>
  );
};

export default Footer;
