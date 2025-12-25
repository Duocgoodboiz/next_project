"use client";

import React from "react";
import { User } from "lucide-react";
import ProfileForm from "@/components/profile/ProfileForm";
import { useProfile } from "@/hooks/useProfile";

export default function ProfilePage() {
  const {
    profile,
    isLoading,
    isSaving,
    isEditing,
    startEdit,
    cancelEdit,
    saveEdit,
    updateField,
  } = useProfile();

  if (isLoading) {
    return (
      <div className="p-12 text-center text-gray-500">Loading profile...</div>
    );
  }

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

        {isSaving && (
          <div className="text-xs text-emerald-600 font-medium mt-2 animate-pulse">
            Saving changes...
          </div>
        )}
      </div>
    </div>
  );
}
