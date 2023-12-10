import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Logo from "./logo";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Communities",
    href: "/communities",
  },
  {
    title: "Events",
    href: "/events",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

const Navbar = () => {
  return (
    <div className="flex h-16 w-full items-center justify-between p-6">
      <Logo />
      <div className="flex items-center gap-8">
        {navItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <div>{item.title}</div>
          </Link>
        ))}
        <Button asChild>
          <Link href={"/donate"}>Donate</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
