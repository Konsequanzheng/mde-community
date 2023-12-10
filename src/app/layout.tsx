import "~/styles/globals.css";

import { Roboto } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/lib/utils";

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
    <html lang="en">
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          roboto.className,
        )}
      >
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
