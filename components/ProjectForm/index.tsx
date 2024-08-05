"use client";
import { AttachIcon } from "@/public/svgs";
import { addAlert } from "@/redux/alerts";
import { submitBrief } from "@/redux/brief/contact";
import { uploadFiles } from "@/redux/file/file";
import { AppDispatch, useAppSelector } from "@/redux/store";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DropdownSelect } from "..";
import Button from "../Button";
import InputField from "../Forms/InputField";
import Textarea from "../Forms/Textarea";
import PhoneNumberInput from "../PhoneInput";
import { INDUSTRY } from "./industryData";

const ProjectForms = () => {
  const [industry, setIndustry] = useState("");
  const [briefDescription, setBriefDescription] = useState("");
  const [phone, setPhone] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileAttachment, setFileAttachment] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [briefObjectives, setBriefObjectives] = useState("");
  const [competitors, setCompetitors] = useState("");
  const [benchmarks, setBenchmarks] = useState("");

  const dispatch: AppDispatch = useDispatch();
  const { status, error, file } = useAppSelector((state) => state.fileUpload);
  const briefStatus = useAppSelector((state) => state.brief.status);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
      handleFileUpload(file);
    }
  };

  const handleFileUpload = (file: File) => {
    dispatch(uploadFiles({ file }))
      .unwrap()
      .then((response) => {
        setFileAttachment(response.file_link);
      })
      .catch((error) => {
        dispatch(
          addAlert({
            id: "",
            headText: "Error",
            subText: error?.message,
            type: "error",
          })
        );
        console.error("Error uploading file:", error);
      });
  };

  const handleBriefDescription = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setBriefDescription(event.target.value);
  };

  const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIndustry(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const bundleId = Number(sessionStorage.getItem("bundleId"));
    const packageId = Number(sessionStorage.getItem("packageId"));

    try {
      const res = await dispatch(
        submitBrief({
          first_name: firstName,
          last_name: lastName,
          company_name: companyName,
          phone_number: `+${phone}`,
          work_email: workEmail,
          industry_type: industry,
          brief_objectives: briefObjectives,
          brief_description: briefDescription,
          competitors: competitors,
          benchmarks: benchmarks,
          brief_attachment: fileAttachment ?? "",
          package_id: packageId,
          bundle_id: bundleId,
        })
      );

      // console.log(br)

      if (briefStatus === "succeeded") {
        dispatch(
          addAlert({
            id: "",
            headText: "Success",
            subText: "Form Submitted Successfully!. Thank you",
            type: "success",
          })
        );
      }
    } catch (error) {
      dispatch(
        addAlert({
          id: "",
          headText: "Error",
          subText: "Error submitting form. Please try again!",
          type: "error",
        })
      );
      console.error("Error submitting brief:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="max-w-[744px] mx-auto mb-[80px] md:border rounded-2xl md:p-8 md:shadow-dark-blue"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-6">
        <div className="flex max-lg:flex-col gap-8">
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
          type="text"
          label="Company name"
          placeholder="Enter Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <PhoneNumberInput
          value={phone}
          onChange={setPhone}
          label="Phone number"
        />

        <InputField
          type="email"
          label="Work Email"
          placeholder="Enter Work Email"
          value={workEmail}
          onChange={(e) => setWorkEmail(e.target.value)}
        />

        {/* Select field for type of enquiry */}
        <DropdownSelect
          label="Type of Industry"
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
          value={briefObjectives}
          onChange={(e) => setBriefObjectives(e.target.value)}
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
          value={competitors}
          onChange={(e) => setCompetitors(e.target.value)}
          tooltipText="Identify the top three competitors in your industry and what you perceive as their strength."
          placeholder="Type in your message"
        />
        <Textarea
          id="aspiration"
          name="aspiration"
          label="Top Three Aspiration / Benchmark"
          value={benchmarks}
          onChange={(e) => setBenchmarks(e.target.value)}
          tooltipText="Name three brands/projects you admire and what you admire about them that resonates with your brand goal too."
          placeholder="Type in your message"
        />

        <div className="flex items-center gap-2 mb-8">
          {/* upload file on click */}
          <label
            htmlFor="selectedFile"
            className="flex items-center gap-1 py-2.5 px-4 w-fit bg-neutral100 text-black border border-ash rounded-lg text-sm cursor-pointer"
          >
            <AttachIcon fillColor="#484848" />
            Attach a file
          </label>
          <input
            type="file"
            name="selectedFile"
            id="selectedFile"
            hidden
            onChange={handleFileChange}
          />
          {status === "loading" ? (
            <span className="text-grey500">Uploading...</span>
          ) : status === "succeeded" ? (
            <span className="text-grey500">
              {selectedFile?.name} File uploaded successfully
            </span>
          ) : (
            <span className="text-grey500">PDF or DOC (max. 5mb)</span>
          )}
        </div>
      </div>

      <div className="flex gap-4.5 items-end">
        <Button
          label="Get Started"
          classNames="py-2 px-4 w-fit"
          type="submit"
          isLoading={isSubmitting}
        />
        <div>
          <span className="underline">Can’t submit now? </span>
          <span className="text-primary500 ml-1"> Download this form </span>
        </div>
      </div>
    </form>
  );
};

export default ProjectForms;
