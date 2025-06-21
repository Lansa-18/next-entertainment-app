import LoginForm from "./LoginForm";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <article className="flex w-full flex-col gap-4 rounded-[2rem] bg-dark-blue p-[3.2rem]">
      <h2 className="text-[3.2rem] font-normal tracking-[-.5px] text-white phone:text-[2.5rem]">
        Login
      </h2>

      <LoginForm />
    </article>
  );
}
