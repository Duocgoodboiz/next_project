"use client";

import React from "react";
import ProfileForm from "@/components/profile/ProfileForm";
import { MOCK_USER_PROFILE } from "@/lib/data/mock/profile/user";
import { User } from "lucide-react";
import { useProfile } from "@/hooks/useProfile";

export default function ProfilePage() {
  // Gọi Hook để lấy logic
  const { profile, isEditing, startEdit, cancelEdit, saveEdit, updateField } =
    useProfile(MOCK_USER_PROFILE);

  return (
    <div className="space-y-6">
      <div className="max-w-lg w-full">
        {/* HEADER */}
        <div className="flex flex-row items-center justify-between gap-4 mb-5">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Edit Profile</h1>
          </div>

          {/* NÚT EDIT */}
          {!isEditing && (
            <button
              onClick={startEdit}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition-all whitespace-nowrap bg-emerald-600 text-white hover:bg-emerald-700"
            >
              <User className="w-4 h-4" /> Edit Profile
            </button>
          )}
        </div>

        {/* FORM */}
        <ProfileForm
          data={profile}
          isEditing={isEditing}
          onSave={saveEdit}
          onCancel={cancelEdit}
          onChange={updateField}
        />
      </div>
    </div>
  );
}
