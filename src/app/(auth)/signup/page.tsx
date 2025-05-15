// import SignInButton from "../../_components/SignInButton";

import Link from "next/link";
import SignupForm from "./SignupForm";

export const metadata = {
  title: "Sign Up",
};

export default function Page() {
  return (
    <article className="flex w-full flex-col gap-10 rounded-[2rem] bg-dark-blue p-[3.2rem]">
      <h2 className="text-[3.2rem] font-normal tracking-[-.5px] text-white">
        Sign Up
      </h2>

      <SignupForm />

      <h3 className="text-center text-[1.5rem] font-normal leading-normal text-white">
        Already have an account?{" "}
        <Link href="/login">
          <span className="text-primary-red"> Login</span>
        </Link>
      </h3>
    </article>
  );
}
