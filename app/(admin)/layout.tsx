import "../(root)/globals.css"
export default function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html>
      <body>
        <main>
        {children}
        </main>
      </body>
      </html>
        
    )
  }
  