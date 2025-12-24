"use client";

import { useState, useMemo } from "react";
import {
  DETAILED_LINKS,
  LINKS_PAGE_STATS,
} from "@/lib/data/mock/affiliate/affiliate";

export function useAffiliateLinks() {
  const [filterStatus, setFilterStatus] = useState<string>("All Links");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // 1. Logic Lọc & Tìm kiếm kết hợp
  const filteredLinks = useMemo(() => {
    return DETAILED_LINKS.filter((link) => {
      // Lọc theo Status
      const matchesStatus =
        filterStatus === "All Links" ? true : link.status === filterStatus;

      // Lọc theo Search (Tên, ID, URL)
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        link.name.toLowerCase().includes(query) ||
        link.linkId.toLowerCase().includes(query) ||
        link.url.toLowerCase().includes(query);

      return matchesStatus && matchesSearch;
    });
  }, [filterStatus, searchQuery]);

  // 2. Logic tính số lượng cho từng Tab (để hiển thị con số badge)
  const getStatusCount = (status: string) => {
    if (status === "All Links") return DETAILED_LINKS.length;
    return DETAILED_LINKS.filter((l) => l.status === status).length;
  };

  return {
    // Data
    stats: LINKS_PAGE_STATS,
    filteredLinks,

    // Actions & State
    filterStatus,
    setFilterStatus,
    searchQuery,
    setSearchQuery,

    // Helpers
    getStatusCount,
  };
}
