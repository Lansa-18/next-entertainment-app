"use client";

import { signIn } from "next-auth/react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(6, { message: "Password must be at least 8 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function LoginForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
    form.reset();
  };

  const handleGoogleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-[1rem]"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative flex">
                  <input
                    className="w-full border-b border-light-blue bg-inherit pb-7 text-[1.5rem] text-white caret-primary-red outline-none placeholder:text-[1.5rem] placeholder:text-white placeholder:opacity-50"
                    placeholder="Email Address"
                    type="email"
                    {...field}
                  />
                  <FormMessage className="absolute right-0 top-[30%] -translate-y-1/2 text-[1.3rem] text-primary-red" />
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative flex">
                  <input
                    className="w-full border-b border-light-blue bg-inherit pb-7 text-[1.5rem] text-white caret-primary-red outline-none placeholder:text-[1.5rem] placeholder:text-white placeholder:opacity-50"
                    placeholder="Password"
                    type="password"
                    {...field}
                  />
                  <FormMessage className="absolute right-0 top-[30%] -translate-y-1/2 text-[1.3rem] text-primary-red" />
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        <button
          className="mt-[1.6rem] rounded-[6px] bg-primary-red py-6 text-[1.5rem] font-normal leading-normal text-white duration-300 ease-linear hover:bg-white hover:text-black"
          type="submit"
        >
          Login to your account
        </button>

        <article className="mx-auto mt-4 flex w-[30%] justify-between">
          <button className="" type="button" onClick={handleGoogleSignIn}>
            <Image
              src="https://authjs.dev/img/providers/google.svg"
              alt="Google logo"
              height="34"
              width="34"
            />
          </button>
          <button className="">
            <Image
              src="https://authjs.dev/img/providers/github.svg"
              alt="Google logo"
              height="34"
              width="34"
            />
          </button>
        </article>
      </form>
    </Form>
  );
}
