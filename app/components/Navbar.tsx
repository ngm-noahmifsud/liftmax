import React from "react";
import Link from "next/link";

type NavbarProps = {
  title: string;
};

function Navbar({ title }: NavbarProps) {
  return (
    <nav>
      <h1>{title}</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/history">History</Link>
    </nav>
  );
}

export default Navbar;
