import Link from "next/link";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { LoginForm } from "@/components/auth/login/LoginForm";
import { text } from "@/config";

export default function LoginPage() {
  const t = text.auth;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* 1. Header  */}
      <AuthHeader title={t.title} subtitle={t.subtitle} />

      {/* 2. Form Card */}
      <LoginForm />

      {/* 3. Footer Link */}
      <div className="mt-8 text-center text-sm text-gray-500">
        {t.no_account}{" "}
        <Link
          href="/register"
          className="font-medium text-[#0d724f] hover:underline"
        >
          {t.sign_up}
        </Link>
      </div>
    </div>
  );
}
