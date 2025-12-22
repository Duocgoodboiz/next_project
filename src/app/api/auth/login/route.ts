import { NextResponse } from "next/server";
import { UserRole, UserStatus } from "@/lib/constants";

export async function POST(request: Request) {
  const body = await request.json();
  if (body.email === "admin@gmail.com" && body.password === "123456") {
    return NextResponse.json({
      accessToken: "fake-jwt-token-xyz",
      user: {
        id: "1",
        name: "Admin User",
        email: body.email,
        role: UserRole.ADMIN,
        status: UserStatus.ACTIVE,
      },
    });
  }

  return NextResponse.json(
    { message: "Sai tài khoản hoặc mật khẩu" },
    { status: 401 }
  );
}
