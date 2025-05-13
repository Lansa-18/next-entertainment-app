import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Bookedmarked",
};

interface BookmarkLayoutProp {
  children: React.ReactNode;
}

export default function BookmarkLayout({ children }: BookmarkLayoutProp) {
  return <div>{children}</div>;
}
