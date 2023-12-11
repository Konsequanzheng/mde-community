import React from "react";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import TopBar from "./top-bar";
import { Menu } from "lucide-react";

const MobileTopBar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={30} />
      </SheetTrigger>
      <SheetContent side="top">
        <TopBar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileTopBar;
