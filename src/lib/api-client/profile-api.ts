import { UserProfile } from "@/lib/types/user-profile";

export const profileApi = {
  getProfile: async (): Promise<UserProfile> => {
    try {
      const res = await fetch("/api/profile");
      if (!res.ok) throw new Error("Failed to fetch profile");
      return await res.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  updateProfile: async (data: UserProfile): Promise<UserProfile> => {
    try {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to update profile");
      return await res.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
