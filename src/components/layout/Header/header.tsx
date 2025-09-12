import { Navbar } from "./navbar";
import { Topbar } from "./topbar";
import logo from "../../../assets/logo.png";
import Image from "next/image";

export const Header = ({ locale }) => {
  return (
    <div className="w-full absolute sticky top-0 z-50 flex justify-between px-10 items-center h-[140px] bg-white ">
      <Image
        src={logo.src}
        width={250}
        height="58"
        alt="logo"
        className="w-[250px] h-[58px] "
      />
      <div className="flex flex-col gap-8 justify-end">
        <Topbar locale={locale} />
        <Navbar locale={locale} footer={false} />
      </div>
    </div>
  );
};
