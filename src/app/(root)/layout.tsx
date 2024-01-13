import React from "react";
import Navbar from "../_components/navbar";
import Footer from "../_components/footer";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
