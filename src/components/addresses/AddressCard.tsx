import React from "react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { Address, AddressType } from "@/lib/types/address";
import { ADDRESS_TEXT } from "@/config/text/addresses";
import { IconButton } from "@/components/common/IconButton";
import { AddressEditForm } from "./AddressEditForm";

interface AddressCardProps {
  address: Address;
  isEditing: boolean;
  onEditStart: () => void;
  onEditCancel: () => void;
  onUpdate: (updatedAddress: Address) => void;
  onDelete?: (id: string | number) => void;
}

export const AddressCard = ({
  address,
  isEditing,
  onEditStart,
  onEditCancel,
  onUpdate,
  onDelete,
}: AddressCardProps) => {
  // --- CHẾ ĐỘ SỬA (Dựa vào prop isEditing) ---
  if (isEditing) {
    return (
      <div className="bg-white rounded-2xl border border-(--erp-border) p-8 shadow-sm min-h-145 flex flex-col justify-center transition-all duration-300">
        <AddressEditForm
          initialData={address}
          onSave={onUpdate}
          onCancel={onEditCancel}
        />
      </div>
    );
  }

  // --- CHẾ ĐỘ XEM ---
  return (
    <div className="bg-white rounded-2xl border border-(--erp-border) p-0 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-start p-6 pb-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-(--stat-icon) flex items-center justify-center text-(--erp-primary) shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <div className="flex flex-col items-start gap-1">
              <h3 className="font-semibold text-(--erp-text-main) text-base capitalize leading-tight">
                {address.type === AddressType.Billing
                  ? ADDRESS_TEXT.CARD.BILLING_TITLE
                  : ADDRESS_TEXT.CARD.SHIPPING_TITLE}
              </h3>
              {address.isDefault && (
                <span className="bg-(--stat-icon) text-(--erp-primary) text-[10px] font-bold px-2 py-0.5 rounded border border-green-100 uppercase tracking-wider">
                  {ADDRESS_TEXT.CARD.DEFAULT_BADGE}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <IconButton
            icon={<HiOutlinePencil size={14} />}
            onClick={onEditStart} // Gọi hàm từ cha
            title={ADDRESS_TEXT.CARD.ACTIONS.EDIT}
          />
          <IconButton
            variant="danger"
            icon={<HiOutlineTrash size={14} />}
            onClick={() => onDelete?.(address.id)}
            title={ADDRESS_TEXT.CARD.ACTIONS.DELETE}
          />
        </div>
      </div>

      {/* Body Info */}
      <div className="text-[15px] text-(--erp-text-sub) space-y-1.5 leading-6 pl-11 pr-6 pb-6 flex-1">
        <p className="font-semibold text-(--erp-text-main) text-lg mb-1">
          {address.firstName} {address.lastName}
        </p>
        {address.company && <p>{address.company}</p>}
        <p>{address.addressLine1}</p>
        {address.addressLine2 && <p>{address.addressLine2}</p>}
        <p>
          {address.city}, {address.state} {address.zipCode}
        </p>
        <p>{address.country}</p>
        <p className="pt-2">{address.phone}</p>
      </div>
    </div>
  );
};
