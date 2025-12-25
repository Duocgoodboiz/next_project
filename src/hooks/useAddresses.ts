// src/hooks/useAddresses.ts
import { useState, useEffect } from "react";
import { Address } from "@/lib/types/address";
import { addressesApi } from "@/lib/api-client/addresses-api";

export const useAddresses = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [editingId, setEditingId] = useState<string | number | null>(null);

  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);

        const data = await addressesApi.getAddresses();
        setAddresses(data);
      } catch (error) {
        console.error("Failed to load addresses", error);
      } finally {
        setIsLoading(false);
      }
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
