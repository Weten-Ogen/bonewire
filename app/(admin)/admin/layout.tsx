import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../../globals.css";
import Adminprovider from "@/components/providers/adminprovider";

const inter = Poppins({ subsets: ["latin"],weight:"400" });

export const metadata: Metadata = {
  title: "Bonewire",
  description: "An ecommerce store for kente end-products and accessories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Adminprovider className="">
            {children}
          </Adminprovider>        
        
        </body>
    </html>
  );
}
