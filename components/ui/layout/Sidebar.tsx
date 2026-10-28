"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Home, Users } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { Label: "Dashboard", icon: Home, href: "/dashboard" },
  { Label: "Siswa", icon: Users, href: "/dashboard/siswa" },
  { Label: "Kelas", icon: BarChart3, href: "/dashboard/kelas" },
  { Label: "Pelanggaran", icon: BarChart3, href: "/dashboard/pelanggaran" },
];

function SidebarContent({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col bg-white text-gray-800">
      <div className="flex h-20 items-center justify-between px-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="h-9 w-9 rounded-lg bg-blue-600 flex items-center justify-center">
            <span className="text-white font-semibold text-sm">MS</span>
          </div>
          <h1 className="text-gray-800 font-semibold text-lg">Manajemen Siswa</h1>
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {menuItems.map(({ Label, icon: Icon, href }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className={`flex items-center w-full rounded-lg px-3 py-2.5 text-sm transition-colors ${
                isActive
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon className="h-4 w-4" />
                <span>{Label}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
          <div className="h-8 w-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
            <span className="text-xs font-medium text-gray-700">BH</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate text-gray-800">Bagus Hidayat</p>
            <p className="text-xs text-gray-500 truncate">bagushidayat@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-64 lg:overflow-y-auto border-r border-gray-200 bg-white">
        <SidebarContent />
      </aside>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/20 lg:hidden" onClick={onClose} />
          <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl lg:hidden">
            <SidebarContent onClose={onClose} />
          </aside>
        </>
      )}
    </>
  );
}
