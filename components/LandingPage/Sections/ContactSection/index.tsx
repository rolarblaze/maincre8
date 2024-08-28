"use client";
import InputField from "@/components/Forms/InputField";
import Textarea from "@/components/Forms/Textarea";
import BlueMessageIcon from "@/public/svgs/BlueMessageIcon";
import BluePhoneIcon from "@/public/svgs/BluePhoneIcon";
import BlueSocialMediaIcon from "@/public/svgs/BlueSocialMediaIcon";
import FacebookIcon from "@/public/svgs/FacebookIcon";
import InstagramIcon from "@/public/svgs/InstagramIcon";
import LinkedInIcon from "@/public/svgs/LinkedInIcon";
import XIcon from "@/public/svgs/XIcon";
import React, { ReactNode } from "react";
import { useFormik } from "formik";
import {
  contactFormData,
  ContactFormValues,
  FieldName,
  validationSchema,
} from "./formValues";

function Contact({
  title,
  body,
  icon,
}: {
  title: string;
  body: any;
  icon: ReactNode;
}) {
  return (
    <div className="px-6 py-6 flex gap-6 border border-grey300 max-w-[488px] rounded-lg">
      <div>{icon}</div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-primary600">{title}</h3>
        <div>{body}</div>
      </div>
    </div>
  );
}

function ContactForm() {
  const formik = useFormik<ContactFormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // handle form submission
      console.log(values, "form submitted!");
    },
  });

  return (
    <div className="px-5 md:px-8 py-8 w-full border border-transparent md:border-grey200 rounded-lg">
      <form onSubmit={formik.handleSubmit} className="space-y-8">
        {contactFormData.map((entity, idx) => {
          return (
            <div key={idx}>
              {entity.type === "textArea" && (
                <Textarea
                  name={entity.name}
                  label={entity.label}
                  placeholder={entity.placeholder}
                  error={formik.errors[entity.name as FieldName]}
                  onChange={formik.handleChange}
                />
              )}
              {entity.type !== "textArea" && (
                <InputField
                  name={entity.name}
                  type={
                    entity.type as
                      | "text"
                      | "password"
                      | "email"
                      | "number"
                      | "url"
                  }
                  label={entity.label}
                  placeholder={entity.placeholder}
                  error={formik.errors[entity.name as FieldName]}
                  onChange={formik.handleChange}
                />
              )}
            </div>
          );
        })}
        <button
          className="rounded-[20px] bg-primary900 px-6 py-3 text-white"
          type="submit"
        >
          Send us a message
        </button>
      </form>
    </div>
  );
}

function ContactSection() {
  const contactData = [
    {
      icon: <BlueMessageIcon />,
      title: "Contact Us",
      body: (
        <div>
          For technical aassistance or support-related queries, please contact
          our dedicated support team at
          <p> hello@sellmedia.africa</p>
        </div>
      ),
    },
    {
      icon: <BluePhoneIcon />,
      title: "Phone Number",
      body: "+234 706 419 1282",
    },
    {
      icon: <BlueSocialMediaIcon />,
      title: "Social Media",
      body: (
        <div className="flex gap-[13px]">
          <XIcon />
          <LinkedInIcon />
          <FacebookIcon />
          <InstagramIcon />
        </div>
      ),
    },
  ];
  return (
    <section className="py-12 px-5 md:px-10 lg:px-28 flex flex-col gap-[52px] w-full">
      <p className="max-w-[593px]">
        We appreciate your interest in SellCrea8. For any inquiries, please use
        the contact information below or fill out the form, and our team will
        get back to you promptly.
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        {/* Contact */}
        <div className="space-y-6 order-2 md:order-1">
          {contactData.map((contact, contactIdx) => {
            return (
              <Contact
                key={contactIdx}
                icon={contact.icon}
                title={contact.title}
                body={contact.body}
              />
            );
          })}
        </div>

        {/* Conatct Form */}
        <div className="max-w-[696px] w-full order-1 md:order-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
