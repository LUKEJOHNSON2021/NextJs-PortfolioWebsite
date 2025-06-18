"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { motion } from "framer-motion";

// 1) Zod schema
const EmailFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }).nonempty({ message: "Email address is required." }),
  message: z.string().min(1, { message: "Message is required." }),
});
type FormValues = z.infer<typeof EmailFormSchema>;

const EmailForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(EmailFormSchema),
    defaultValues: { name: "", email: "", message: "" },
    mode: "onChange", // validate on each change
  });

  // 2) only runs when form is valid
  const onSubmit = async (data: FormValues) => {
    const templateParams = {
      user_name: data.name,
      user_email: data.email,
      message: data.message,
      to_name: "Recipient", // or whatever you need
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams, // <-- mapped keys here
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      reset();
      toast.success("Message sent", {
        description: "Your message was sent successfully.",
      });
    } catch (err) {
      console.error(err);
      toast.error("Uh oh! Something went wrong.", {
        description: "There was a problem with your request.",
      });
    }
  };

  return (
    <motion.div
      className="flex max-w-[800px] w-full md:w-1/2 flex-col gap-10 px-5 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-center font-semibold text-3xl text-white">Contact Me</h2>

      {/* noValidate lets RHF handle errors, not browser */}
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            placeholder="Your Name"
            className="mt-1 block w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="you@example.com"
            className="mt-1 block w-full px-3 py-2 border rounded-md text-white focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-lg">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            {...register("message")}
            placeholder="How can I help?"
            className="mt-1 block w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.message && <p className="text-red-500">{errors.message.message}</p>}
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className={`
              bg-zinc-900 dark:bg-zinc-200 text-white dark:text-zinc-900
              flex items-center rounded-xl px-6 py-3 transition-transform duration-200
              ${!isValid || isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}
            `}
          >
            {isSubmitting ? "Sending…" : "Send Message"}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default EmailForm;
