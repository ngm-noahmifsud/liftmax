import React from "react";
import Link from "next/link";

type NavbarProps = {
  title: string;
};

function Navbar({ title }: NavbarProps) {
  return (
    <nav className="w-screen bg-slate-900">
      <div className="p-2">
        <h2>{title}</h2>
      </div>
      <div
        className="
        flex justify-between md:justify-start
        px-4 py-2 [&>*]:pr-4
        "
      >
        <Link href="/">Dashboard</Link>
        <Link href="/history">History</Link>
        <Link href="/exercises">Exercises</Link>
      </div>
    </nav>
  );
}

export default Navbar;
