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

const EmailForm = (props: Props) => {
  const form = useForm<z.infer<typeof EmailFormValues>>({
    mode: "onChange",
    resolver: zodResolver(EmailFormValues),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const formData = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    const emailjsServiceId = process.env.EMAILJS_SERVICE_ID || "s";
    const emailjsTemplateId = process.env.EMAILJS_TEMPLATE_ID || "s";
    const emailjsPublicKey = process.env.EMAILJS_PUBLIC_KEY || "s";

    e.preventDefault();

    //check the form is valid before sending if not return a toast message
    if (!form.formState.isValid) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please fill out the form correctly.",
      });
      return;
    }

    emailjs.sendForm(emailjsServiceId, emailjsTemplateId, formData.current!, emailjsPublicKey).then(
      () => {
        //handle success
        toast({
          variant: "default",
          title: "Message sent",
          description: "Your message was sent sucessfully",
        });
        form.reset({ name: "", email: "", message: "" });
      },
      () => {
        //handle error
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      }
    );
    e.currentTarget.reset();
  };

  return (
    <motion.div className="flex flex-col gap-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div className="flex justify-center font-semibold	text-3xl">Contact Me</div>
      <Form {...form}>
        <form ref={formData} onSubmit={sendEmail} className="flex flex-col gap-10 pb-10">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Enter your name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Email address for contacting</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Enter your message</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Message"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="justify-center flex">
            <Button type="submit" className="self-start px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
              Send Message
            </Button>
          </div>
        </form>
      </Form>
    </motion.div>
  );
};

export default EmailForm;
