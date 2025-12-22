import { MOCK_DASHBOARD_DATA } from "@/lib/api-client/mock/dashboard/dashboard-data";
import { DashboardData } from "@/lib/types/dashboard";

export const dashboardApi = {
  getOverview: async (): Promise<DashboardData> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOCK_DASHBOARD_DATA);
      }, 500);
    });
  },
};
