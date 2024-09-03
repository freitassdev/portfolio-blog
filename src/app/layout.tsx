import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michel Freitas - Blog",
  description: "cusujocusujo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="dark h-[100dvh] w-full bg-gradient-to-tl from-zinc-950 to-zinc-900 bg-no-repeat bg-fixed">
        {children}
      </body>
    </html>
  );
}