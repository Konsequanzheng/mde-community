import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const NewsletterCard = () => {
  return (
    <div className="flex max-w-xl justify-center p-5">
      <div className="flex flex-col items-center gap-5 rounded-3xl bg-[#CB525D] p-16">
        <div className="text-center text-4xl">👋🏽👋🏻👋🏾👋🏼👋🏿</div>
        <div className="text-center text-3xl font-bold text-white">
          Sign up to our
          <br />
          newsletter
        </div>
        <div className="text-center text-white">
          Hear about the cool stuff happening in Medellín. We'll also be giving
          away some special passes and discounts to some events so stay tuned!
        </div>
        {/* <Input type="email" placeholder="Email address" /> */}
        <Button variant="tertiary" type="submit" className="mt-6 font-bold">
          <Link href="https://mdecommunity.typeform.com/newsletter?typeform-source=mdecommunity.com">
            Keep me updated
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NewsletterCard;
