import Image from "next/image";
import Link from "next/link";
import React from "react";

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
  {
    title: "Donate",
    href: "/donate",
  },
];

const Navbar = () => {
  return (
    <div className="flex h-16 w-full items-center justify-between p-5 pt-5 text-xl text-black">
      <div className="flex items-center gap-3">
        <Image
          src="/logo-full.png"
          alt="MDE Community Logo"
          width={50}
          height={50}
        />
        <div>MDE Community</div>
      </div>
      <div className="flex gap-3">
        {navItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <div>{item.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
