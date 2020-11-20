import React, { ReactElement } from "react";

const Footer = (): ReactElement => {
  return (
    <footer className="h-16 bg-white fixed bottom-0 container flex justify-center items-center">
      <p className="text-gray-700 text-xs">
        Wykonał z pasją i ❤️ <span className="ml-1 underline">Łukasz Dymek</span>
      </p>
    </footer>
  );
};

export default Footer;
