import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Providers from "@/components/providers";
import AuthProvider from "@/components/providers/authprovider";

const inter = Poppins({ subsets: ["latin"],weight:"400" });

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
        <AuthProvider>
          <Providers className="">
            {children}
          </Providers>
        </AuthProvider>
        </body>
    </html>
  );
}
