import "../globals.css"

export default function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <section className="mt-40">
          {children}
        </section>
        
        
    )
  }
  