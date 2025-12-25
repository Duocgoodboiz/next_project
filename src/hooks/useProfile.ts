import { useState, useEffect } from "react";
import { UserProfile } from "@/lib/types/user-profile";
import { profileApi } from "@/lib/api-client/profile-api";

const DEFAULT_PROFILE: UserProfile = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  city: "",
  addressLine1: "",
  addressLine2: "",
  zipCode: "",
};

export function useProfile() {
  const [profile, setProfile] = useState<UserProfile>(DEFAULT_PROFILE);
  const [backupProfile, setBackupProfile] =
    useState<UserProfile>(DEFAULT_PROFILE);

  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  // 1. Fetch Data từ API
  useEffect(() => {
    const loadProfile = async () => {
      try {
        setIsLoading(true);
        const data = await profileApi.getProfile();
        setProfile(data);
        setBackupProfile(data);
      } catch (error) {
        console.error("Error loading profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProfile();
  }, []);

  // --- ACTIONS ---

  const startEdit = () => {
    setBackupProfile({ ...profile });
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setProfile(backupProfile);
    setIsEditing(false);
  };

  const saveEdit = async () => {
    try {
      setIsSaving(true);

      const updatedData = await profileApi.updateProfile(profile);

      setProfile(updatedData);
      setBackupProfile(updatedData);

      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to save profile:", error);
      alert("Failed to update profile");
    } finally {
      setIsSaving(false);
    }
  };

  const updateField = (field: keyof UserProfile, value: string) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return {
    profile,
    isLoading,
    isSaving,
    isEditing,
    startEdit,
    cancelEdit,
    saveEdit,
    updateField,
  };
}
