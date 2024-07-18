"use client";
import React, { useState } from "react";
import InputField from "../Forms/InputField";
import Textarea from "../Forms/Textarea";
import Button from "../Button";
import { DropdownSelect } from "..";
import { INDUSTRY } from "./industryData";
import { AttachIcon } from "@/public/svgs";
import PhoneNumberInput from "../PhoneInput";

const ProjectForms = () => {
  const [industry, setIndustry] = useState("");
  const [briefDescription, setBriefDescription] = useState("");
  const [phone, setPhone] = useState<string>("");
  const handleClick = () => {
    document.getElementById("selectedFile")?.click();
  };
  const handleBriefDescription = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setBriefDescription(event.target.value);
  };
  const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIndustry(e.target.value);
  };
  return (
    <form className="max-w-[744px] mx-auto mb-[80px] md:border rounded-2xl md:p-8 md:shadow-dark-blue">
      <div className="flex flex-col gap-6">
        <div className="flex gap-8">
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
        </div>
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
          tooltipText="State the main goals you aim to achieve e.g  drive brand engagement interaction and awareness"
          placeholder="Enter brief objectives"
        />

        {/* Textarea for message input */}
        <Textarea
          id="description"
          name="description"
          label="Brief description"
          value={briefDescription}
          tooltipText="Provide a summary of your project, including its scope, main purpose,  key features and target audience."
          onChange={handleBriefDescription}
          placeholder="Type in your message"
        />
        <Textarea
          id="competitors"
          name="competitors"
          label="Top Three Competitors"
          value=""
          onChange={() => console.log("hello")}
          tooltipText="Identify the top three competitors in your industry and what you perceive as their strength."
          placeholder="Type in your message"
        />
        <Textarea
          id="aspiration"
          name="aspiration"
          label="Top Three Aspiration / Benchmark"
          value=""
          onChange={() => console.log("hello")}
          tooltipText="Name three brands/projects you admire and what you admire about them that resonates with your brand goal too."
          placeholder="Type in your message"
        />

        <div className="flex items-center gap-2  mb-8 ">
          <input type="file" name="file" id="selectedFile" hidden />
          <button
            className="flex items-center gap-1 py-2.5 px-4 w-fit bg-neutral100 text-black border border-ash rounded-lg text-sm"
            onClick={handleClick}
          >
            <AttachIcon fillColor="#484848" />
            Attach a file{" "}
            <input type="file" id="selectedFile" style={{ display: "none" }} />
          </button>

          <span className="text-grey500">PDF or DOC (max. 5mb)</span>
        </div>
      </div>

      <div className="flex gap-4.5 items-end">
        <Button label="Get Started" classNames="py-2 px-4 w-fit" />
        <div>
          <span className="underline">Can’t submit now? </span>
          <span className="text-primary500 ml-1"> Download this form </span>
        </div>
      </div>

      <PhoneNumberInput value={phone} onChange={setPhone} />
      <p>Entered phone number: {phone}</p>
    </form>
  );
};

export default ProjectForms;
