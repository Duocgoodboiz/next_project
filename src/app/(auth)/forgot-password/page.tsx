import { AuthHeader } from "@/components/auth/AuthHeader";
import { ForgotPasswordForm } from "@/components/auth/forgotpassword/ForgotPasswordForm";
import { text } from "@/config";

export default function ForgotPasswordPage() {
  const t = text.auth;

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f9fafb] pt-auth-top pb-auth-bottom">
      <AuthHeader title={t.forgot_title} subtitle={t.forgot_subtitle} />

      <ForgotPasswordForm />
    </div>
  );
}
