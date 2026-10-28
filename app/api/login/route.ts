import { NextResponse } from "next/server";
import { users } from "@/lib/users";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body.email ?? "").trim().toLowerCase();
    const password = String(body.password ?? "");

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email dan password wajib diisi." },
        { status: 400 }
      );
    }

    const user = users.find(
      (item) => item.email === email && item.password === password
    );

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Email atau password salah!" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Login berhasil!",
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Data login tidak valid." },
      { status: 400 }
    );
  }
}
