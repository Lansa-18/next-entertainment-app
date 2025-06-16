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
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="laptop:w-[40%] custom-915:w-[50%] land-phone:w-[60%] custom-680:w-[70%] custom-500:w-[80%] custom-390:w-[90%] w-[30%] flex-col items-center gap-[8rem]">
        <div className="mb-10 flex w-full justify-center">
          <Image
            className=""
            src={logo}
            width={32}
            height={25.6}
            alt="logo-icon"
          />
        </div>

        {children}
      </div>
    </div>
  );
}

// absolute left-1/2 mt-[7.85rem] flex w-[30%] -translate-x-1/2
// relative
