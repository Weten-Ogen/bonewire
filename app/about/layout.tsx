

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mt-30">
        about page
        { children}
        
        </main>
  );
}
