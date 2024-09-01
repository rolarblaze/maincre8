"use client";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { uploadProfilePhoto } from "@/redux/auth/features";
import { addAlert } from "@/redux/alerts";
import { CameraIcon } from "@/public/icons";

export default function UserProfilePhoto() {
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector((state) => state.auth);
  const [imagePreview, setImagePreview] = useState<string | null>(
    profile?.user?.profile?.profile_image_link || null
  );

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append("file", file);

      const actionResult = await dispatch(uploadProfilePhoto(formData));

      if (uploadProfilePhoto.fulfilled.match(actionResult)) {
        dispatch(
          addAlert({
            id: "",
            headText: "Success",
            subText: "Profile picture successfully uploaded.",
            type: "success",
          })
        );
        // Update the image preview with the new file link
        setImagePreview(actionResult.payload.file_link);
      } else if (uploadProfilePhoto.rejected.match(actionResult)) {
        const errorMessage =
          actionResult.error?.message ||
          "Failed to upload profile picture. Please try again.";
        dispatch(
          addAlert({
            id: "",
            headText: "Error",
            subText: errorMessage,
            type: "error",
          })
        );
      }
    }
  };

  return (
    <div className="relative w-14 h-14 rounded-full ">
      <label htmlFor="profilePicUpload" className="cursor-pointer">
        <img
          src={imagePreview || "/default-avatar.png"}
          alt="Profile"
          className="w-full h-full rounded-full object-cover"
        />
        <div className="absolute bottom-0 right-0 bg-white rounded-full p-0.5">
          <CameraIcon />
        </div>
      </label>
      <input
        type="file"
        id="profilePicUpload"
        accept="image/png, image/jpeg"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}
