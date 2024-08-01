"use client";
import { Button, DropdownSelect } from "@/components";
import InputField from "@/components/Forms/InputField";
import PhoneNumberInput from "@/components/PhoneInput";
import { UserProfilePhoto } from "@/public/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string>("");
  const [country, setCountry] = useState("");
  const [countryList, setCountryList] = useState<
    { label: string; value: string }[]
  >([]);
  const [stateOfResidence, setStateOfResidence] = useState("");
  const [address, setAddress] = useState("");

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
  };

  const handleSaveChanges = () => {
    const formData = {
      firstName,
      lastName,
      phone,
      country,
      stateOfResidence,
      address,
    };

    console.log(formData);
  };

  const handleResetChanges = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setCountry("");
    setStateOfResidence("");
    setAddress("");
  };

  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const response = await axios.get(
          "https://sellcrea8-api-4aefdc9b08e3.herokuapp.com/admin-user/country_codes"
        );
        const countryCodesData = response.data.country_codes_data;

        const formattedCountryCodes = countryCodesData.map((country: any) => ({
          label: country?.name,
          value: country?.name,
        }));

        console.log(formattedCountryCodes);

        setCountryList(formattedCountryCodes);
      } catch (error) {
        console.error("Error fetching country codes:", error);
      }
    };

    fetchCountryCodes();
  }, []);

  return (
    <form className="border border-grey200 p-6 rounded-lg flex flex-col gap-6 max-w-[740px]">
      <p className="text-lg font-semibold">Basic information</p>
      <UserProfilePhoto />

      <div className="flex gap-6">
        <InputField
          type="text"
          label="First name"
          placeholder="Enter First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <InputField
          type="text"
          label="Last name"
          placeholder="Enter Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <InputField
        type="email"
        label="Work Email"
        placeholder="Enter Work Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <PhoneNumberInput
        value={phone}
        onChange={setPhone}
        label="Phone number"
      />

      <DropdownSelect
        label="Country of residence"
        options={countryList}
        value={country}
        onChange={handleCountryChange}
        id="county"
        name="country"
        placeholder="Nigeria"
      />

      <InputField
        type="text"
        label="State of residence"
        placeholder="Lagos"
        value={stateOfResidence}
        onChange={(e) => setStateOfResidence(e.target.value)}
      />

      <InputField
        type="text"
        label="Address"
        placeholder="example, yaba, lagos"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <div className="flex gap-4">
        <Button
          label="Save changes"
          classNames="w-fit py-3 px-4"
          onClick={handleSaveChanges}
        />
        <Button
          label="Reset changes"
          classNames="w-fit bg-transparent text-primary600 border border-primary400 py-3 px-4"
          onClick={handleResetChanges}
        />
      </div>
    </form>
  );
}
