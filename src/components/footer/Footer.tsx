import React, { ReactElement } from "react";

const Footer = (): ReactElement => {
  return (
    <footer className="h-16 w-screen bg-gray-800 fixed bottom-0 flex justify-center items-center">
      <p className="text-gray-200 text-xs">
        Wykonał z pasją i ❤️ <span className="ml-1 underline">Łukasz Dymek</span>
      </p>
    </footer>
  );
};

export default Footer;
