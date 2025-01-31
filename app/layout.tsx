import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";

const poppins = localFont({ 
  src: [
    {

      path: './fonts/Poppins-Black.ttf',
      weight: '700',
      style: 'normal',

    },
    {
      path: './fonts/Poppins-Bold.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Medium.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
})

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
    <html lang="en">
      <body
        className={`${poppins.className}  antialiased`}
      > 
      <main>
        <Toaster 
        richColors
        position="top-center"
        className="text-lg capitalize"
        />
        
          {children}
        
      </main>   
      </body>
    </html>
  );
}
