import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Logo from "./logo";
import MobileTopBar from "./mobile-top-bar";
import NavItems from "~/lib/nav-items";

const Navbar = () => {
  return (
    <div className="fixed z-50 flex h-fit w-full items-center justify-between bg-white p-4">
      <Logo />
      <div className="hidden items-center gap-8 sm:flex">
        {NavItems.map((item, index) => (
          <Link key={index} href={item.href} scroll={true}>
            <div>{item.title}</div>
          </Link>
        ))}
        <Button asChild className="font-bold">
          <Link href="/fundraiser" target="_blank">
            Donate
          </Link>
        </Button>
      </div>
      <MobileTopBar />
    </div>
  );
};

export default Navbar;
