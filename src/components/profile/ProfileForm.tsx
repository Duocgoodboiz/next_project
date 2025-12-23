import React from "react";
import { UserProfile } from "@/lib/types/user-profile";
import { Save, X } from "lucide-react";

interface ProfileFormProps {
  data: UserProfile;
  isEditing: boolean;
  onSave: () => void;
  onCancel: () => void;
  onChange: (field: keyof UserProfile, value: string) => void;
}

export default function ProfileForm({
  data,
  isEditing,
  onSave,
  onCancel,
  onChange,
}: ProfileFormProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <form className="space-y-5">
        {/* SECTION 1 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-2">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            <FormInput
              label="First Name"
              value={data.firstName}
              onChange={(e) => onChange("firstName", e.target.value)}
              disabled={!isEditing}
              required
            />
            <FormInput
              label="Last Name"
              value={data.lastName}
              onChange={(e) => onChange("lastName", e.target.value)}
              disabled={!isEditing}
              required
            />
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-2">
            Contact Information
          </h3>
          <div className="grid grid-cols-1 gap-y-4">
            <FormInput
              label="Email Address"
              type="email"
              value={data.email}
              onChange={(e) => onChange("email", e.target.value)}
              disabled={!isEditing}
              required
            />
            <FormInput
              label="Phone Number"
              type="tel"
              value={data.phone}
              onChange={(e) => onChange("phone", e.target.value)}
              disabled={!isEditing}
              required
            />
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-2">
            Address Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            <FormInput
              label="Country"
              value={data.country}
              onChange={(e) => onChange("country", e.target.value)}
              disabled={!isEditing}
            />
            <FormInput
              label="City"
              value={data.city}
              onChange={(e) => onChange("city", e.target.value)}
              disabled={!isEditing}
            />
          </div>

          <div className="grid grid-cols-1">
            <FormInput
              label="Address Line 1"
              value={data.addressLine1}
              onChange={(e) => onChange("addressLine1", e.target.value)}
              disabled={!isEditing}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            <FormInput
              label="Address Line 2"
              value={data.addressLine2}
              onChange={(e) => onChange("addressLine2", e.target.value)}
              disabled={!isEditing}
            />
            <FormInput
              label="ZIP Code"
              value={data.zipCode}
              onChange={(e) => onChange("zipCode", e.target.value)}
              disabled={!isEditing}
            />
          </div>
        </section>

        {/* SAVE & CANCEL BUTTONS */}
        {isEditing && (
          <div className="pt-4 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2">
            <button
              type="button"
              onClick={onSave}
              className="flex items-center gap-2 bg-(--erp-primary)  text-white font-medium py-2 px-4 rounded-lg transition-colors shadow-sm text-sm"
            >
              <Save className="w-4 h-4" />
              Save Changes
            </button>

            <button
              type="button"
              onClick={onCancel}
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
            >
              <X className="w-4 h-4" />
              Cancel
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

// --- SUB-COMPONENT: INPUT ---
interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function FormInput({
  label,
  className,
  disabled,
  required,
  ...props
}: FormInputProps) {
  return (
    <div className="space-y-1.5 group">
      <label
        className={`block text-sm font-semibold transition-colors ${
          disabled ? "text-gray-500" : "text-gray-900"
        }`}
      >
        {label}
        {required && !disabled && <span className="text-red-500 ml-1">*</span>}
      </label>

      <input
        disabled={disabled}
        className={`
          w-full py-2 text-sm transition-all duration-200
          ${
            disabled
              ? "bg-transparent border-b border-transparent px-0 text-gray-500 cursor-default"
              : "bg-white border border-gray-300 rounded-md px-3 text-gray-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 focus:outline-none"
          }
          ${className}
        `}
        {...props}
      />
    </div>
  );
}
