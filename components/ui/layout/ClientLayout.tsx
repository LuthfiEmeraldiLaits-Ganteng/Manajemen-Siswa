"use client";

import { usePathname } from "next/navigation";
import AppLayout from "./AppLayout";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const noLayoutPaths = ["/auth/login", "/auth/register"];

  if (noLayoutPaths.includes(pathname)) {
    return <>{children}</>;
  }

  const useLayoutPaths = [
    "/dashboard",
    "/dashboard/siswa",
    "/dashboard/kelas",
    "/dashboard/pelanggaran",
  ];

  const useAppLayout = useLayoutPaths.some((path) => pathname.startsWith(path));

  return useAppLayout ? <AppLayout>{children}</AppLayout> : <>{children}</>;
}
