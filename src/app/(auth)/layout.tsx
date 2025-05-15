import { Metadata } from "next";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";

export const metadata: Metadata = {
  title: "User authentication",
};

interface LoginLayoutProp {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: LoginLayoutProp) {
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute left-1/2 mt-[7.85rem] flex w-[30%] -translate-x-1/2 flex-col items-center gap-[8rem]">
        <Image src={logo} width={32} height={25.6} alt="logo-icon" />

        {children}
      </div>
    </div>
  );
}
