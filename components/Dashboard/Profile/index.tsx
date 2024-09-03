"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  DropdownSelect,
  InputField,
  PhoneNumberInput,
} from "@/components";
import UserProfilePhoto from "@/components/Dashboard/Profile/UserProfilePhoto";
import { addAlert } from "@/redux/alerts";
import { updateInfo } from "@/redux/auth/features";
import { useAppDispatch, useAppSelector } from "@/redux/store";

export default function Profile() {
  const dispatch = useAppDispatch();
  const { isLoading, profile } = useAppSelector((state) => state.auth);

  // Validate and set default values
  const getValidatedProfileValue = (value: any, defaultValue: string) => {
    return typeof value === "string" ? value : defaultValue;
  };

  const [firstName, setFirstName] = useState(
    getValidatedProfileValue(profile?.first_name, "")
  );
  const [lastName, setLastName] = useState(
    getValidatedProfileValue(profile?.last_name, "")
  );
  const [email, setEmail] = useState(
    getValidatedProfileValue(profile?.user?.profile?.user_email, "")
  );
  const [phone, setPhone] = useState(
    getValidatedProfileValue(profile?.user?.profile?.phone_number, "")
  );
  const [country, setCountry] = useState(
    getValidatedProfileValue(profile?.user?.profile?.country, "")
  );
  const [stateOfResidence, setStateOfResidence] = useState(
    getValidatedProfileValue(profile?.user?.profile?.state, "")
  );
  const [address, setAddress] = useState(
    getValidatedProfileValue(profile?.user?.profile?.address, "")
  );
  const [countryList, setCountryList] = useState<
    { label: string; value: string }[]
  >([]);
  const [countryListLoading, setCountryListLoading] = useState(false);

  useEffect(() => {
    const fetchCountryCodes = async () => {
      setCountryListLoading(true);
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}admin-user/country_codes`
        );
        const countryCodesData = response.data.country_codes_data;

        const formattedCountryCodes = countryCodesData.map((country: any) => ({
          label: country?.name,
          value: country?.name,
        }));

        setCountryList(formattedCountryCodes);
      } catch (error) {
        console.error("Error fetching country codes:", error);
      } finally {
        setCountryListLoading(false);
      }
    };

    fetchCountryCodes();
  }, []);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
  };

  const handleSaveChanges = async () => {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !country ||
      !stateOfResidence ||
      !address
    ) {
      dispatch(
        addAlert({
          id: "",
          headText: "Validation Error",
          subText: "Please fill in all required fields.",
          type: "error",
        })
      );
      return;
    }

    const payload = {
      phone_number: phone,
      country,
      state: stateOfResidence,
      address,
    };

    const actionResult = await dispatch(updateInfo(payload));

    if (updateInfo.fulfilled.match(actionResult)) {
      dispatch(
        addAlert({
          id: "",
          headText: "Success",
          subText: "Profile updated successfully",
          type: "success",
        })
      );
    } else if (updateInfo.rejected.match(actionResult)) {
      const errorMessage =
        actionResult.error?.message ||
        "Failed to update profile. Please try again.";
      dispatch(
        addAlert({
          id: "",
          headText: "Error",
          subText: errorMessage,
          type: "error",
        })
      );
    }
  };

  const handleResetChanges = () => {
    setFirstName(getValidatedProfileValue(profile?.first_name, ""));
    setLastName(getValidatedProfileValue(profile?.last_name, ""));
    setEmail(getValidatedProfileValue(profile?.user?.profile?.user_email, ""));
    setPhone(
      getValidatedProfileValue(profile?.user?.profile?.phone_number, "")
    );
    setCountry(getValidatedProfileValue(profile?.user?.profile?.country, ""));
    setStateOfResidence(
      getValidatedProfileValue(profile?.user?.profile?.state, "")
    );
    setAddress(getValidatedProfileValue(profile?.user?.profile?.address, ""));
  };

  return (
    <form className="md:border border-grey200 md:p-6 rounded-lg flex flex-col gap-6 w-full max-w-[740px]">
      <p className="text-lg font-semibold">Basic information</p>
      <UserProfilePhoto />

      <div className="flex flex-col md:flex-row gap-6">
        <InputField
          type="text"
          label="First name"
          placeholder="Enter First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          classNames="p-4"
          disabled
        />

        <InputField
          type="text"
          label="Last name"
          placeholder="Enter Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          classNames="p-4"
          disabled
        />
      </div>

      <InputField
        type="email"
        label="Work Email"
        placeholder="Enter Work Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        classNames="p-4 bg-grey100"
        disabled
      />

      <PhoneNumberInput
        value={phone}
        onChange={setPhone}
        label="Phone number"
      />

      {countryListLoading ? (
        <p>Loading country list...</p>
      ) : (
        <DropdownSelect
          label="Country of residence"
          options={countryList}
          value={country}
          onChange={handleCountryChange}
          id="country"
          name="country"
          placeholder="Select Country"
        />
      )}

      <InputField
        type="text"
        label="State of residence"
        placeholder="Lagos"
        value={stateOfResidence}
        onChange={(e) => setStateOfResidence(e.target.value)}
        classNames="p-4"
      />

      <InputField
        type="text"
        label="Address"
        placeholder="example, yaba, lagos"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        classNames="p-4"
      />

      <div className="flex flex-col md:flex-row gap-4">
        <Button
          label="Save changes"
          classNames="md:w-fit py-3 px-4"
          onClick={handleSaveChanges}
          isLoading={isLoading}
        />
        <Button
          label="Reset changes"
          classNames="md:w-fit bg-transparent text-primary600 border border-primary400 py-3 px-4"
          onClick={handleResetChanges}
        />
      </div>
    </form>
  );
}
