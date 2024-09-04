import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Providers from "@/components/providers";

const inter = Poppins({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bonewire",
  description: "An Ecommerce store for Kente products and goods .",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers className="">
          {children}
        </Providers>
        </body>
    </html>
  );
}
