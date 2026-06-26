import Header from "@/components/Header";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen text-gray-400">
          <Header />
          <div className="container py-10">{children}</div>
        </main>
      </body>
    </html>
  );
}
