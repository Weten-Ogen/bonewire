import type { Metadata } from "next";
import "../../app/globals.css";

export const metadata: Metadata = {
  title: "Bonewire",
  description: "An ecommerce application that products made off of kente . We sell ghana made fabrics, bags , accessories, foot wear, purse , wristbands and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
        <div className="">
         {children}
        </div>
  );
}
