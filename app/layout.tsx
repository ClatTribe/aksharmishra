import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akshar Mishra",
  description: "STUDENT LEADER • FOOD ENTREPRENEUR • SHOOTER & ASPIRING BUSINESS PROFESSIONAL",
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