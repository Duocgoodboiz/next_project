import { useState } from "react";
import { useRouter } from "next/navigation";
import { authApi } from "@/lib/data/auth-api";
import { LoginPayload } from "@/lib/types/login";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const login = async (payload: LoginPayload) => {
    setLoading(true);
    try {
      const { data } = await authApi.login(payload);

      // Lưu token
      if (typeof window !== "undefined") {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      alert("Đăng nhập thành công!");
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Đăng nhập thất bại. Thử: admin@gmail.com / 123456");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};
