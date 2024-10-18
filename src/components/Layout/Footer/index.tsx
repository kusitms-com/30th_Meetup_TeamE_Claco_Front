import Home from "@/assets/svgs/home.svg?react";
import Search from "@/assets/svgs/search.svg?react";
import Ticket from "@/assets/svgs/ticket.svg?react";
import User from "@/assets/svgs/user.svg?react";
import { useState } from "react";

type FooterState = {
  home: boolean;
  search: boolean;
  ticket: boolean;
  user: boolean;
};

const Footer = () => {
  const [isActive, setIsActive] = useState<FooterState>({
    home: true,
    search: false,
    ticket: false,
    user: false,
  });

  const handleClick = (tab: keyof FooterState) => {
    setIsActive({
      home: false,
      search: false,
      ticket: false,
      user: false,
      [tab]: true,
    });
  };

  return (
    <footer className="h-[74px] w-screen max-w-[450px] text-common-white bg-[#202020] shadow-footer fixed bottom-0 z-50">
      <div className="flex justify-around space-x-5 px-5 py-[10px]">
        <div
          className={`flex-col items-center justify-center w-12 h-6 text-center cursor-pointer ${isActive.home ? "text-primary-500" : ""}`}
          onClick={() => handleClick("home")}
        >
          <span className="flex justify-center">
            <Home />
          </span>
          <span
            className={`text-[11px] ${isActive.home ? "font-bold" : "font-medium"} leading-none`}
          >
            추천
          </span>
        </div>
        <div
          className={`flex-col items-center justify-center w-12 h-6 text-center cursor-pointer ${isActive.search ? "text-primary-500" : ""}`}
          onClick={() => handleClick("search")}
        >
          <span className="flex justify-center ">
            <Search />
          </span>
          <span
            className={`text-[11px] ${isActive.search ? "font-bold" : "font-medium"} leading-none`}
          >
            둘러보기
          </span>
        </div>
        <div
          className={`flex-col items-center justify-center w-12 h-6 text-center cursor-pointer ${isActive.ticket ? "text-primary-500" : ""}`}
          onClick={() => handleClick("ticket")}
        >
          <span className="flex justify-center">
            <Ticket />
          </span>
          <span
            className={`text-[11px] ${isActive.ticket ? "font-bold" : "font-medium"} leading-none`}
          >
            티켓
          </span>
        </div>
        <div
          className={`flex-col items-center justify-center w-12 h-6 text-center cursor-pointer ${isActive.user ? "text-primary-500" : ""}`}
          onClick={() => handleClick("user")}
        >
          <span className="flex justify-center">
            <User />
          </span>
          <span
            className={`text-[11px] ${isActive.user ? "font-bold" : "font-medium"} leading-none`}
          >
            마이페이지
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
