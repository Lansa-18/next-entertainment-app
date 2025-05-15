// import SignInButton from "../../_components/SignInButton";

import Link from "next/link";
import LoginForm from "./LoginForm";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <article className="flex w-full flex-col gap-10 rounded-[2rem] bg-dark-blue p-[3.2rem]">
      <h2 className="text-[3.2rem] font-normal tracking-[-.5px] text-white">
        Login
      </h2>

      <LoginForm />

      <h3 className="text-center text-[1.5rem] font-normal leading-normal text-white">
        Don&apos;t have an account?{" "}
        <Link href="/signup">
          <span className="text-primary-red"> Sign Up</span>
        </Link>
      </h3>
    </article>
  );
}
