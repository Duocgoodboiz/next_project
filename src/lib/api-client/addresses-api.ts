import { Address } from "@/lib/types/address";

export const addressesApi = {
  getAddresses: async (): Promise<Address[]> => {
    try {
      const res = await fetch("/api/addresses");

      if (!res.ok) {
        throw new Error("Failed to fetch addresses");
      }

      return await res.json();
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },
};
