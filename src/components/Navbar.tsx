import Link from "next/link";
import { ModeToggle } from "./Toogle";

export default function Navbar() {
  return (
    <nav className="flex justify-between h-14 mb-3 container">
      <div className="flex list-none gap-4">
        <li>
            <Link href="/"> Home </Link>
        </li>
        <li>
            <Link href="/about">About</Link>
        </li>
        <li>
            <Link href="/contacto">Contacto</Link>
        </li>
      </div>
      <ModeToggle />
    </nav>
  );
}
