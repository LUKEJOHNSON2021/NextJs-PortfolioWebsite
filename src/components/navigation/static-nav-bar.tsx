import Link from "next/link";

export default function StaticNavBar() {
  return (
    <nav className="hidden md:flex justify-end flex w-full px-6 py-4">
      {/* Right: Links */}
      <div className="hidden md:flex items-center space-x-6">
        <Link href="/projects" className=" transition font-medium dark:text-zinc-400 dark:hover:text-zinc-200 text-zinc-700 hover:text-zinc-900">
          Projects
        </Link>
        <Link href="/contact-me" className=" transition font-medium dark:text-zinc-400 dark:hover:text-zinc-200 text-zinc-700 hover:text-zinc-900">
          Contact Me
        </Link>
      </div>
    </nav>
  );
}
