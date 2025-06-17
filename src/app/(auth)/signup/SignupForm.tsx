"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z
  .object({
    email: z
      .string()
      .email("Please enter a valid email address")
      .min(1, "Email is required"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      ),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
  });

type FormValues = z.infer<typeof formSchema>;

export default function SignupForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-[2rem]"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                  className="w-full border-b border-light-blue bg-inherit pb-7 text-[1.5rem] text-white caret-primary-red outline-none placeholder:text-[1.5rem] placeholder:text-white placeholder:opacity-50"
                  placeholder="Email Address"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-primary-red" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                  className="w-full border-b border-light-blue bg-inherit pb-7 text-[1.5rem] text-white caret-primary-red outline-none placeholder:text-[1.5rem] placeholder:text-white placeholder:opacity-50"
                  placeholder="Password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-primary-red" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                  className="w-full border-b border-light-blue bg-inherit pb-7 text-[1.5rem] text-white caret-primary-red outline-none placeholder:text-[1.5rem] placeholder:text-white placeholder:opacity-50"
                  placeholder="Repeat password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-primary-red" />
            </FormItem>
          )}
        />

        <button
          className="mt-[1.6rem] rounded-[6px] bg-primary-red py-6 text-[1.5rem] font-normal leading-normal text-white duration-300 ease-linear hover:bg-white hover:text-black"
          type="submit"
        >
          Create your account
        </button>
      </form>
    </Form>
  );
}
