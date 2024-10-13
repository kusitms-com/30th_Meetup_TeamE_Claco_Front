import Home from "@/assets/svgs/home.svg?react";
import Search from "@/assets/svgs/search.svg?react";
import Ticket from "@/assets/svgs/ticket.svg?react";
import User from "@/assets/svgs/user.svg?react";

const Footer = () => {
  return (
    <footer className="h-[74px] w-screen max-w-[450px] text-common-white bg-[#202020] shadow-footer fixed bottom-0 z-10">
      <div className="flex justify-around space-x-5 px-5 py-[10px]">
        <div className="flex-col items-center justify-center w-12 h-6 text-center">
          <span className="flex justify-center">
            <Home />
          </span>
          <span className="text-[11px] text-bold leading-none">추천</span>
        </div>
        <div className="flex-col items-center justify-center w-12 h-6 text-center">
          <span className="flex justify-center">
            <Search />
          </span>
          <span className="text-[11px] text-bold leading-none">둘러보기</span>
        </div>
        <div className="flex-col items-center justify-center w-12 h-6 text-center">
          <span className="flex justify-center">
            <Ticket />
          </span>
          <span className="text-[11px] text-bold leading-none">티켓</span>
        </div>
        <div className="flex-col items-center justify-center w-12 h-6 text-center">
          <span className="flex justify-center">
            <User />
          </span>
          <span className="text-[11px] text-bold leading-none">마이페이지</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
