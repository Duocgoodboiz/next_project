import Link from "next/link";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { RegisterForm } from "@/components/auth/register/RegisterForm";
import { text } from "@/config";

export default function RegisterPage() {
  const t = text.auth;

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f9fafb] pt-auth-top pb-auth-bottom">
      <AuthHeader title={t.register_title} subtitle={t.register_subtitle} />

      <RegisterForm />

      <div className="mt-8 text-center text-sm text-gray-500">
        {t.have_account}{" "}
        <Link
          href="/login"
          className="font-medium text-[#0d724f] hover:underline"
        >
          {t.sign_in}
        </Link>
      </div>
    </div>
  );
}
