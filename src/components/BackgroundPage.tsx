"use client";

export default function BackgroundPage() {
  return (
    <div className="fixed inset-0 w-full max-h-[400dvh] -z-10 overflow-hidden pointer-events-none">
      <div className="w-full h-full">
        <img src="/background_img.png" alt="Background glow" className="w-full h-[400dvh] object-cover opacity-60 mix-blend-screen" />
      </div>
    </div>
  );
}
