

export default function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className="mt-16">
          {children}
        </main>
        
        
    )
  }
  