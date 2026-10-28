import { NextResponse } from "next/server";
import { users } from "@/lib/users";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const password = String(body.password ?? "");

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "Semua data wajib diisi." },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { success: false, message: "Password minimal 6 karakter." },
        { status: 400 }
      );
    }

    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "Email sudah terdaftar." },
        { status: 409 }
      );
    }

    users.push({ name, email, password });

    return NextResponse.json({
      success: true,
      message: "Registrasi berhasil!",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Data registrasi tidak valid." },
      { status: 400 }
    );
  }
}
