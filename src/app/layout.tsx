import "~/styles/globals.css";

import { Roboto } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/lib/utils";
import { TailwindIndicator } from "./_components/tailwind-indicator";
import { GoogleAnalytics } from "@next/third-parties/google";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "MDE Community",
  description: "Where Digital Nomads, Expats, & Locals Meet",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          roboto.className,
        )}
      >
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
        <TailwindIndicator />
      </body>
      <GoogleAnalytics gaId="GT-M38ZK9W" />
    </html>
  );
}
