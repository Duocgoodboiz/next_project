// src/hooks/useAddresses.ts
import { useState, useEffect } from "react";
import { Address } from "@/lib/types/address";
import { getAddresses } from "@/lib/api-client/mock/addresses/addresses-data";

export const useAddresses = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // State quản lý việc sửa
  const [editingId, setEditingId] = useState<string | number | null>(null);

  // THÊM: State quản lý việc thêm mới
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const loadData = () => {
      setAddresses(getAddresses());
      setIsLoading(false);
    };
    loadData();
  }, []);

  const handleDelete = (id: string | number) => {
    if (confirm("Delete address?"))
      setAddresses((prev) => prev.filter((a) => a.id !== id));
  };

  const handleUpdate = (updatedAddr: Address) => {
    setAddresses((prev) =>
      prev.map((a) => (a.id === updatedAddr.id ? updatedAddr : a))
    );
    setEditingId(null);
  };

  // Hàm tạo mới
  const handleCreate = (newAddr: Address) => {
    const newId = Math.random(); // Tạo ID giả lập
    const addressWithId = { ...newAddr, id: newId };
    setAddresses([addressWithId, ...addresses]);

    setIsAdding(false);
  };

  return {
    addresses,
    isLoading,
    editingId,
    setEditingId,
    isAdding,
    setIsAdding,
    handleCreate,
    handleDelete,
    handleUpdate,
  };
};
