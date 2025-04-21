import "./global.css";
import { cinzel, lacquer, chilanka } from "./ui/fonts"; // Import semua font

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cinzel.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}


