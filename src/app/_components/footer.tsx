import { Facebook, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full flex-col flex-wrap items-center justify-between bg-[#2D50AC] py-10 sm:flex-row sm:px-20">
      <Image
        src="/logo-full-white.png"
        alt="MDE Community Logo"
        width={150}
        height={150}
      />
      <div className="flex flex-row gap-14 pt-10 text-white sm:pt-0">
        <div className="flex flex-col gap-y-2">
          <div className="font-bold">Links</div>
          <Link href="#communities">Communities</Link>
          <Link href="#events">Events</Link>
          <Link href="#blog">Blog</Link>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="font-bold">Get in touch</div>
          <div className="flex flex-row gap-x-2">
            <Link href="https://www.instagram.com/mdecommunity/">
              <Instagram />
            </Link>
            <Link href="https://www.facebook.com/medellincommunity/">
              <Facebook />
            </Link>
            <Link href="mailto:hello@mdecommunity.com">
              <Mail />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
