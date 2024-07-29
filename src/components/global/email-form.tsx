"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useRef } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import emailjs from "@emailjs/browser";
import { toast } from "../ui/use-toast";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Textarea } from "../ui/textarea";

type Props = {};

//schema for form values
const EmailFormValues = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const EmailForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(EmailFormValues),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const formData = useRef<HTMLFormElement>(null);

  const sendEmail = async (formData: FormValues) => {
    const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const emailjsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_USER_ID";

    // Validate form data against Zod schema
    try {
      await EmailFormValues.parseAsync(formData);
    } catch (error) {
      console.error("Validation Error:", error);
      return;
    }

    // Prepare the form data for sending via emailjs
    const emailData = {
      ...formData,
      to_name: "Recipient", // Adjust this as per your email template
    };

    // Send email using emailjs
    try {
      const response = await emailjs.send(emailjsServiceId, emailjsTemplateId, emailData, emailjsPublicKey);

      // Reset form after successful submission
      reset();

      // Display success message
      toast({
        variant: "default",
        title: "Message sent",
        description: "Your message was sent successfully",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      // Display error message
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };

  return (
    <motion.div className="flex flex-col gap-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div className="flex justify-center font-semibold	text-3xl">Contact Me</div>
      <form ref={formData} onSubmit={handleSubmit(sendEmail)} className="flex flex-col gap-10 pb-10">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg">
            Enter your name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            placeholder="Name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg">
            Your email address
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="Email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-lg">
            Enter your message
          </label>
          <textarea
            id="message"
            {...register("message")}
            placeholder="Message"
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.message && <p className="text-red-500">{errors.message.message}</p>}
        </div>
        <div className="justify-center flex">
          <button type="submit" className=" self-start px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
            Send Message
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default EmailForm;
