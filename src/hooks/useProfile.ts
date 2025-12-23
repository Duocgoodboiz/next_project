import { UserProfile } from "@/lib/types/user-profile";
import { useState } from "react";

export function useProfile(initialData: UserProfile) {
  const [profile, setProfile] = useState<UserProfile>(initialData);
  const [backupProfile, setBackupProfile] = useState<UserProfile>(initialData);
  const [isEditing, setIsEditing] = useState(false);

  const startEdit = () => {
    setBackupProfile({ ...profile });
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setProfile(backupProfile);
    setIsEditing(false);
  };

  // ACTION Save
  const saveEdit = () => {
    setIsEditing(false);
  };

  // ACTION: Cập nhật từng ô input khi gõ
  const updateField = (field: keyof UserProfile, value: string) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return {
    profile,
    isEditing,
    startEdit,
    cancelEdit,
    saveEdit,
    updateField,
  };
}
