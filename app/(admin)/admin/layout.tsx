import "../../../app/globals.css"

export default function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>

          {children}
        </div>
        
        
    )
  }
  