"use client";

import React from "react";
import { Plus } from "lucide-react";
import { ADDRESS_TEXT } from "@/config/text/addresses";
import { Button } from "@/components/common/Button";
import { AddressCard } from "@/components/addresses/AddressCard";
import { AddressEditForm } from "@/components/addresses/AddressEditForm";
import { useAddresses } from "@/hooks/useAddresses";

export default function AddressesPage() {
  const {
    addresses,
    handleDelete,
    handleUpdate,
    handleCreate,
    isLoading,
    editingId,
    setEditingId,
    isAdding,
    setIsAdding,
  } = useAddresses();

  if (isLoading) {
    return <div className="p-8 text-center">Loading addresses...</div>;
  }

  const containerMaxWidth =
    editingId || isAdding ? "max-w-[1200px]" : "max-w-[663px]";

  return (
    <div className={`w-full ${containerMaxWidth}  p-0`}>
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pt-4 px-4 md:px-0">
        <div>
          <h1 className="text-3xl font-bold text-(--erp-text-main) mb-2">
            {ADDRESS_TEXT.HEADER.TITLE}
          </h1>
          <p className="text-(--erp-text-sub)">
            {ADDRESS_TEXT.HEADER.SUBTITLE}
          </p>
        </div>

        {/* Nút Add Address */}
        {!isAdding && (
          <Button
            variant="primary"
            shape="pill"
            icon={<Plus size={16} />}
            onClick={() => setIsAdding(true)}
          >
            {ADDRESS_TEXT.HEADER.BTN_ADD}
          </Button>
        )}
      </div>

      {/* --- PHẦN FORM THÊM MỚI--- */}
      {isAdding && (
        <div className="mb-8 px-4 md:px-0 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="bg-white rounded-(--radius-card) border border-(--erp-border) p-8 shadow-(--shadow-card) w-full max-w-[50%]">
            <AddressEditForm
              isNew={true}
              onSave={handleCreate}
              onCancel={() => setIsAdding(false)}
            />
          </div>
        </div>
      )}

      {/* GRID LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-0 pb-8">
        {addresses.map((addr) => (
          <AddressCard
            key={addr.id}
            address={addr}
            isEditing={editingId === addr.id}
            onEditStart={() => {
              setEditingId(addr.id);
              setIsAdding(false);
            }}
            onEditCancel={() => setEditingId(null)}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}

        {addresses.length === 0 && !isAdding && (
          <div className="col-span-1 md:col-span-2 text-center text-(--erp-text-sub) py-12 border border-dashed border-(--erp-border) rounded-xl bg-gray-50">
            <p>No addresses found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
