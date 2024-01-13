import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const roboto = Roboto({
  weight: ["500"],
  subsets: ["latin"],
});

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-3">
        <Image
          src="/logo-full-color.png"
          alt="MDE Community Logo"
          width={50}
          height={50}
        />
        <div className={roboto.className}>MDE Community</div>
      </div>
    </Link>
  );
};

export default Logo;
