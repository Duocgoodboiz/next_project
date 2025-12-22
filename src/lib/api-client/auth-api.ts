import http from "./http";
import { API_ROUTES } from "@/lib/constants";
import { LoginPayload, LoginResponse } from "@/lib/types/login";

export const authApi = {
  login: (payload: LoginPayload) => {
    return http.post<LoginResponse>(API_ROUTES.AUTH.LOGIN, payload);
  },
};
