import { DashboardData } from "@/lib/types/dashboard";

export const dashboardApi = {
  getOverview: async (): Promise<DashboardData> => {
    try {
      const response = await fetch("/api/dashboard", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(
          `Error fetching dashboard data: ${response.statusText}`
        );
      }

      const data: DashboardData = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
      throw error;
    }
  },
};
