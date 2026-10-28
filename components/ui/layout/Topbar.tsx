"use client";

import { Menu, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

interface TopbarProps {
  onMenuClick: () => void;
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/auth/login");
  };

  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-gray-200 bg-white px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-gray-600 hover:bg-gray-100 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
        <h1 className="text-xl font-semibold text-gray-800">SMK Negeri 1 Malang</h1>
      </div>

      <button
        type="button"
        onClick={handleLogout}
        className="group flex items-center"
        title="Log out"
      >
        <div className="h-10 w-10 rounded-full border border-gray-200 bg-gray-100 flex items-center justify-center">
          <span className="text-sm font-medium text-gray-600">BH</span>
        </div>
        <div className="hidden group-hover:flex ml-2 items-center gap-1 text-xs text-gray-500">
          <LogOut className="h-3.5 w-3.5" />
        </div>
      </button>
    </header>
  );
}
