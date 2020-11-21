import React, { ReactElement } from "react";
import { Eye } from "../../icons/Eye";

const Header = (): ReactElement => {
  return (
    <header className="fixed w-full h-16 bg-gray-800 flex items-center py-2 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/">
          <div className="flex items-center px-2">
            <Eye className={`w-10 h-10 text-red-400`} />
            <h1 className="pl-2 font-bold text-gray-100">Oko Feed</h1>
          </div>
        </a>
        <span className="italic text-xs md:text-sm text-gray-300 self-end px-2">Wiadomości z pierwszej ręki</span>
      </div>
    </header>
  );
};

export default Header;
