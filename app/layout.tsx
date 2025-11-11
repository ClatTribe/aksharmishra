import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akshar Mishra",
  description: "Creative Designer & Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}