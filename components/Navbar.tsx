import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
    return (
      <nav className="flex justify-between items-center px-6 py-4 border-b border-green-600">
        <Logo />
        <div className="flex gap-8 font-mono text-lg">
          <Link href="/" className="transition-all duration-300 hover:text-green-400 hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]">About</Link>
          <Link href="/projects" className="transition-all duration-300 hover:text-green-400 hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]">Projects</Link>
          <Link href="/contact" className="transition-all duration-300 hover:text-green-400 hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]">Contact</Link>
        </div>
      </nav>
    );
  }