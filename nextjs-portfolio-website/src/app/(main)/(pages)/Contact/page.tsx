"use client";
import EmailForm from "@/components/global/email-form";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="relative flex flex-col w-full items-center justify-center">
      <div className="w-full md:w-1/2 flex flex-col px-3">
        <EmailForm />
      </div>
    </div>
  );
};

export default Page;
