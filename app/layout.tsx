import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ui/layout/ClientLayout";

export const metadata: Metadata = {
  title: "Manajemen Siswa",
  description: "Aplikasi Manajemen Siswa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
