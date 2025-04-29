import LandingScreen from "@/components/ui/landing-screen";
import Projects from "@/components/projects/Projects";
import ContactMe from "@/components/ui/contact-me";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-3.5rem)]">
      <div className="flex flex-1 flex-col w-full items-center overflow-auto">
        <div className="flex justify-center ">
          <LandingScreen />
        </div>
        <Projects />
        <ContactMe />
      </div>
    </div>
  );
}
