import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { clients } from "@/lib/constant";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full relative ">
      <div className="absolute inset-0 z-0">
        <BackgroundGradientAnimation interactive />
      </div>
      <div className="relative flex flex-col overflow-hidden w-full items-center">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl md:text-[6rem] font-bold ">
                I'm Luke Johnson
                <br />
                <span className="text-4xl font-semibold text-black dark:text-white mt-1 leading-none">Scroll down to see some of my projects</span>
              </h1>
            </>
          }
        >
          <Image
            src={`/CodeScreenShot.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
        <div className="items-center w-full flex flex-col md:pt-0 pt-20">
          <InfiniteMovingCards className="md:mt-[1rem] mt-[-20px]" items={clients} direction="right" speed="slow" />
        </div>
      </div>
    </main>
  );
}
