import { MainProps } from "@/lib/types";
import React from "react";

export default function Main({ children }: MainProps) {
  return <main className="mt-[3.4rem] text-white">{children}</main>;
}
