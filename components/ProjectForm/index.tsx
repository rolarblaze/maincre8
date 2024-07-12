"use client";
import React, { useState } from "react";
import InputField from "../Forms/InputField";
import { AttachIcon } from "@/public/icons";
import Textarea from "../Forms/Textarea";
import Button from "../Button";
import { DropdownSelect } from "..";
import { INDUSTRY } from "./industryData";

const ProjectForms = () => {
  const [industry, setIndustry] = useState("");
  const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIndustry(e.target.value);
  };
  return (
    <form className="max-w-[744px] mx-auto mb-[80px] md:border rounded-2xl md:p-8 md:shadow-dark-blue">
      <div className="flex flex-col gap-6">
        <InputField
          type="text"
          label="First name"
          placeholder="Enter First Name"
        />
        <InputField
          type="text"
          label="Last name"
          placeholder="Enter Last Name"
        />
        <InputField
          type="text"
          label="Company name"
          placeholder="Enter Company Name"
        />
        <InputField
          type="number"
          label="Phone number"
          placeholder="Enter Phone Number"
        />
        <InputField
          type="email"
          label="Work Email"
          placeholder="Enter Work Email"
        />

        {/* Select field for type of enquiry */}
        <DropdownSelect
          label="Type of Enquiry"
          options={INDUSTRY}
          value={industry}
          onChange={handleIndustryChange}
          id="project"
          name="project"
          placeholder="Select type"
        />

        {/* ---- */}
        <InputField
          type="text"
          label="Brief Objectives"
          placeholder="Enter brief objectives"
        />

        {/* Textarea for message input */}
        <Textarea
          id="description"
          name="description"
          label="Brief description"
          value=""
          onChange={() => console.log("hello")}
          placeholder="Type in your message"
        />
        <Textarea
          id="competitors"
          name="competitors"
          label="Top Three Competitors"
          value=""
          onChange={() => console.log("hello")}
          placeholder="Type in your message"
        />
        <Textarea
          id="aspiration"
          name="aspiration"
          label="Top Three Aspiration / Benchmark"
          value=""
          onChange={() => console.log("hello")}
          placeholder="Type in your message"
        />
        <button className="flex items-center gap-1 py-2.5 px-4 w-fit bg-neutral100 text-black border border-ash rounded-lg mb-8 text-sm ">
          <AttachIcon />
          <input type="file" name="file" id="file" hidden />
          Attach a file{" "}
        </button>
      </div>

      <div className="flex gap-4.5 items-end">
        <Button label="Get Started" classNames="py-2 px-4 w-fit" />
        <div>
          <span className="underline">Can’t submit now? </span>
          <span className="text-primary500 ml-1"> Download this form </span>
        </div>
      </div>
    </form>
  );
};

export default ProjectForms;
