"use client";
import { addAlert } from "@/redux/alerts";
import { submitContactForm } from "@/redux/newsletter_n_contactform/features";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useFormik } from "formik";
import React, { ReactNode } from "react";
import {
  contactFormData,
  ContactFormValues,
  contactValidationSchema,
  FieldName,
} from "../formValues";
import Textarea from "@/components/Forms/Textarea";
import InputField from "@/components/Forms/InputField";
import Button from "@/components/Button";
import BlueMessageIcon from "@/public/svgs/BlueMessageIcon";
import Link from "next/link";
import BluePhoneIcon from "@/public/svgs/BluePhoneIcon";
import BlueSocialMediaIcon from "@/public/svgs/BlueSocialMediaIcon";
import XIcon from "@/public/svgs/XIcon";
import LinkedInIcon from "@/public/svgs/LinkedInIcon";
import FacebookIcon from "@/public/svgs/FacebookIcon";
import InstagramIcon from "@/public/svgs/InstagramIcon";

function ContactCard({
  title,
  body,
  icon,
}: {
  title: string;
  body: any;
  icon: ReactNode;
}) {
  return (
    <div className="flex max-w-[488px] gap-6 rounded-lg border border-grey300 px-6 py-6">
      <div>{icon}</div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-primary600">{title}</h3>
        <div>{body}</div>
      </div>
    </div>
  );
}

function ContactForm() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.contactForm.isLoading);

  const formik = useFormik<ContactFormValues>({
    initialValues: {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      message: "",
    },
    validationSchema: contactValidationSchema,
    onSubmit: async (values) => {
      // handle form submission
      if (values) {
        const actionResult = await dispatch(submitContactForm(values));
        if (submitContactForm.fulfilled.match(actionResult)) {
          dispatch(
            addAlert({
              id: "",
              headText: "Success",
              subText: `Message successfully sent`,
              type: "success",
            }),
          );
          formik.resetForm({
            values: {
              first_name: "",
              last_name: "",
              phone_number: "",
              email: "",
              message: "",
            },
          });
        } else if (submitContactForm.rejected.match(actionResult)) {
          const errorMessage =
            actionResult.payload?.errorMessage ||
            "An error occurred while sending message. Please try again.";
          dispatch(
            addAlert({
              id: "",
              headText: "Error",
              subText: errorMessage,
              type: "error",
            }),
          );
        }
      } else {
        console.error("Missing payload");
      }
    },
  });

  return (
    <div className="w-full rounded-lg border border-transparent px-5 py-8 md:border-grey200 md:px-8">
      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-1 gap-8 md:grid-cols-2"
      >
        {contactFormData.map((entity, idx) => {
          return (
            <div
              key={idx}
              className={`${entity.type === "textArea" ? "col-span-1 md:col-span-2" : ""}`}
            >
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
        <Button
          type="submit"
          isLoading={isLoading}
          label="Submit"
          classNames="!rounded-lg !bg-primary500 py-3 md:px-[6.13rem] md:py-4 w-auto"
        />
      </form>
    </div>
  );
}

function MainContactSection() {
  const contactData = [
    {
      icon: <BlueMessageIcon />,
      title: "Send Us an Email",
      body: (
        <div className="flex flex-col gap-[0.88rem]">
          <span>For technical aassistance or support-related queries</span>
          <Link href="hello@sellmedia.africa" className="font-semibold">
            {" "}
            hello@sellmedia.africa
          </Link>
        </div>
      ),
    },
    {
      icon: <BluePhoneIcon />,
      title: "Give us a call",
      body: "+234 706 419 1282",
    },
    {
      icon: <BlueSocialMediaIcon />,
      title: "Social Media",
      body: (
        <div className="flex gap-[13px] rounded-lg bg-primary50 px-4 py-4">
          <FacebookIcon href="https://web.facebook.com/sellmediagroup?_rdc=1&_rdr" />
          <XIcon href="https://x.com/SellMediaInc" />
          <InstagramIcon href="https://www.instagram.com/sellmediainc/" />
          <LinkedInIcon href="https://www.linkedin.com/company/sellmedia-inc/" />
        </div>
      ),
    },
  ];
  return (
    <section className="flex w-full flex-col gap-[52px] bg-grey50 px-5 py-[6.25rem] md:px-10 lg:px-[6.25rem]">
      <div className="flex flex-col justify-between gap-8 md:flex-row">
        {/* Contact */}
        <div className="order-2 space-y-6 md:order-1">
          {contactData.map((contact, contactIdx) => {
            return (
              <ContactCard
                key={contactIdx}
                icon={contact.icon}
                title={contact.title}
                body={contact.body}
              />
            );
          })}
        </div>

        {/* Conatct Form */}
        <div className="order-1 w-full max-w-[696px] md:order-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default MainContactSection;
