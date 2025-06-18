"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScalingSectionProps {
  children: ReactNode;
  /** when to finish growing (0→1 scroll) */
  growEnd?: number;
  /** when to start shrinking (0→1 scroll) */
  shrinkStart?: number;
  /** min scale */
  startScale?: number;
}

export default function ScalingSection({ children, startScale = 0.5, growEnd = 0.05, shrinkStart = 0.95 }: ScalingSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // custom grow→hold→shrink curve
  const rawScale = useTransform(scrollYProgress, (p) => {
    if (p <= growEnd) {
      // grow  startScale→1 over [0→growEnd]
      const t = p / growEnd;
      return startScale + (1 - startScale) * t;
    }
    if (p < shrinkStart) {
      // hold at 1
      return 1;
    }
    // shrink 1→startScale over [shrinkStart→1]
    const t = (p - shrinkStart) / (1 - shrinkStart);
    return 1 - (1 - startScale) * t;
  });
  const scale = useSpring(rawScale, { stiffness: 200, damping: 30 });

  // borderRadius reverse
  const rawRadius = useTransform(scrollYProgress, (p) => {
    const maxR = 2.5; // rem
    if (p <= growEnd) {
      const t = p / growEnd;
      return `${maxR * (1 - t)}rem`;
    }
    if (p < shrinkStart) {
      return `0rem`;
    }
    const t = (p - shrinkStart) / (1 - shrinkStart);
    return `${maxR * t}rem`;
  });
  const borderRadius = useSpring(rawRadius, { stiffness: 200, damping: 30 });

  return (
    <div ref={ref} className="absolute inset-0">
      <motion.div style={{ scale, borderRadius }} className="bg-[#141414] w-full h-full origin-center">
        {children}
      </motion.div>
    </div>
  );
}
