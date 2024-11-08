import "../globals.css"

export default function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="mt-40">
          {children}
        </div>
        
        
    )
  }
  