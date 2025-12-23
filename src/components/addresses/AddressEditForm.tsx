import React, { useState } from "react";
import { MapPin, X } from "lucide-react";
import { Address, AddressType } from "@/lib/types/address";
import { Button } from "@/components/common/Button";
import { CleanInput } from "@/components/common/CleanInput";

interface AddressEditFormProps {
  initialData?: Address;
  onSave: (updatedData: Address) => void;
  onCancel: () => void;
  isNew?: boolean;
}

const DEFAULT_ADDRESS: Address = {
  id: "",
  type: AddressType.Billing,
  isDefault: false,
  firstName: "",
  lastName: "",
  company: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  zipCode: "",
  country: "United States",
  phone: "",
};

export const AddressEditForm = ({
  initialData,
  onSave,
  onCancel,
  isNew = false,
}: AddressEditFormProps) => {
  const [formData, setFormData] = useState<Address>(
    initialData || DEFAULT_ADDRESS
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTypeChange = (type: AddressType) => {
    setFormData((prev) => ({ ...prev, type }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full w-full">
      {/* 1. HEADER */}
      {isNew ? (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4  font-semibold">
            <span className="border border-current rounded-full p-1">
              <MapPin size={14} strokeWidth={2.5} />
            </span>
            <span>Add New Address</span>
          </div>

          {/* Radio Group chọn Type */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-(--erp-text-sub)">
              Address Type
            </label>
            <div className="flex gap-6 mt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  checked={formData.type === AddressType.Billing}
                  onChange={() => handleTypeChange(AddressType.Billing)}
                  className="w-4 h-4 text-(--erp-primary) focus:ring-(--erp-primary) border-gray-300 accent-(--erp-primary)"
                />
                <span className="text-sm font-medium text-(--erp-text-main)">
                  Billing
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  checked={formData.type === AddressType.Shipping}
                  onChange={() => handleTypeChange(AddressType.Shipping)}
                  className="w-4 h-4 text-(--erp-primary) focus:ring-(--erp-primary) border-gray-300 accent-(--erp-primary)"
                />
                <span className="text-sm font-medium text-(--erp-text-main)">
                  Shipping
                </span>
              </label>
            </div>
          </div>
        </div>
      ) : (
        // Header khi Edit
        <div className="mb-6">
          <h3 className="font-semibold text-(--erp-text-main) text-lg capitalize">
            {formData.type} Address
          </h3>
        </div>
      )}

      {/* 2. FORM FIELDS */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 mb-6 flex-1">
        <CleanInput
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <CleanInput
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <div className="col-span-2">
          <CleanInput
            label="Company (Optional)"
            name="company"
            value={formData.company || ""}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-2">
          <CleanInput
            label="Address Line 1"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-span-2">
          <CleanInput
            label="Address Line 2 (Optional)"
            name="addressLine2"
            value={formData.addressLine2 || ""}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-2 grid grid-cols-6 gap-3">
          <div className="col-span-2">
            <CleanInput
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-span-2">
            <CleanInput
              label="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-span-2">
            <CleanInput
              label="ZIP Code"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-span-2">
          <CleanInput
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-span-2">
          <CleanInput
            label="Phone (Optional)"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* 3. BUTTONS */}
      <div className="mt-auto flex items-center gap-3">
        <Button type="submit" variant="primary" shape="rounded">
          Save Address
        </Button>

        <button
          type="button"
          onClick={onCancel}
          className="flex items-center gap-1 text-sm font-medium text-(--erp-text-sub) hover:text-(--erp-text-main) px-4 py-2 transition-colors"
        >
          <X size={18} /> Cancel
        </button>
      </div>
    </form>
  );
};
