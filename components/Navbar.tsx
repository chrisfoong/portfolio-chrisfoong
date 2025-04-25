import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
    return (
      <nav className="flex justify-between items-center px-6 py-4 border-b border-green-600">
        <Logo />
        <div className="flex gap-8 font-mono text-lg">
          <Link href="/">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    );
  }