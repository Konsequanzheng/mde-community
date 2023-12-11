import Link from "next/link";
import React from "react";

import NavItems from "~/lib/nav-items";
import { Button } from "./ui/button";
import { SheetClose } from "./ui/sheet";

const TopBar = () => {
  return (
    <div className="mt-10 flex flex-col gap-8">
      {NavItems.map((item) => {
        return (
          <SheetClose key={item.title} asChild>
            <Link href={item.href}>
              <div>{item.title}</div>
            </Link>
          </SheetClose>
        );
      })}
      <SheetClose asChild>
        <Button className="w-fit" asChild>
          <Link href={"#donate"}>Donate</Link>
        </Button>
      </SheetClose>
    </div>
  );
};

export default TopBar;
