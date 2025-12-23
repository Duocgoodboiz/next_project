import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 2. Cấu hình font Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Đặt tên biến CSS là --font-inter
  display: "swap",
});

export const metadata: Metadata = {
  title: "ERP System",
  description: "Enterprise Resource Planning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 3. Thêm biến variable vào thẻ html hoặc body
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
