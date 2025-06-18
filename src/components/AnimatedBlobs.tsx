"use client";

import { Parallax } from "react-scroll-parallax";

export default function AnimatedBlobs() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden w-full">
      {/* Top blob (0% of page) - Left */}
      <Parallax speed={-5} translateX={[40, -40]} className="absolute top-[3%] right-[-10%] w-[60%] transform-gpu ">
        <img src="/ColouredBlob.png" alt="Blob 1" className="w-[100%] select-none transform" />
      </Parallax>

      {/* Middle blob (50% of page) - Right */}
      <Parallax speed={-2} translateX={[0, 40]} className="absolute top-[50%] left-[-10%] w-[60%] transform-gpu -translate-y-1/2">
        <img src="/ColouredBlob.png" alt="Blob 2" className="w-[100%] select-none rotate-180" />
      </Parallax>

      {/* Bottom blob (100% of page) - Left again */}
      <Parallax speed={-7} translateX={[40, -40]} className="absolute top-[92%] right-[-10%] w-[60%] transform-gpu -translate-y-1/2">
        <img src="/ColouredBlob.png" alt="Blob 3" className="w-[100%] select-none transform" />
      </Parallax>
    </div>
  );
}
