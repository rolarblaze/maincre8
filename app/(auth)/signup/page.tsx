"use client";
import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { setUserTokenCookie } from "@/utils/helpers/auth/cookieUtility";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Tabs, InputField, Button, SocialSignUp } from "@/components";
import {
  Checked,
  EyeIcon,
  Unchecked,
  PasswordMatchIcon,
  PasswordNoMatchIcon,
  EmailFieldIcon,
} from "@/public/icons";
import { signUpIndividual, signUpBusiness } from "@/redux/auth/features";
import { addAlert } from "@/redux/alerts";
import { AppDispatch, useAppDispatch, useAppSelector } from "@/redux/store";
import { SignUpFormValues } from "@/redux/auth/interface";
import {
  validatePassword,
  passwordCriteria,
} from "@/utils/helpers/auth/passwordValidation";
import CheckboxField from "@/components/Forms/Checkbox";
import Link from "next/link";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().test(
    "required-first-name",
    "First name is required",
    function (value) {
      const { isBusiness } = this.parent;
      return isBusiness ? true : !!value;
    }
  ),
  lastName: Yup.string().test(
    "required-last-name",
    "Last name is required",
    function (value) {
      const { isBusiness } = this.parent;
      return isBusiness ? true : !!value;
    }
  ),
  businessName: Yup.string().test(
    "required-business-name",
    "Business name is required",
    function (value) {
      const { isBusiness } = this.parent;
      return isBusiness ? !!value : true;
    }
  ),
  email: Yup.string()
    .email("Invalid email")
    .required("Email address is required"),
  password: Yup.string().required("Password is required"),
});

export default function Signup() {
  const [activeTab, setActiveTab] = useState<string>("individual");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("access_token");

    if (accessToken) {
      setUserTokenCookie(accessToken);
      router.push("/dashboard");
    }
  }, [router]);

  const formik = useFormik<SignUpFormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      businessName: "",
      email: "",
      password: "",
      isBusiness: activeTab === "business",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      if (activeTab === "individual") {
        await handleIndividualSignUp(values, dispatch);
      } else {
        await handleBusinessSignUp(values, dispatch);
      }
    },
  });

  const passwordValidation = validatePassword(formik.values.password);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Separate function for individual signup logic
  const handleIndividualSignUp = async (
    payload: SignUpFormValues,
    dispatch: AppDispatch
  ) => {
    const actionResult = await dispatch(signUpIndividual(payload));

    if (signUpIndividual.fulfilled.match(actionResult)) {
      sessionStorage.setItem("userEmail", payload.email);
      dispatch(
        addAlert({
          id: "",
          headText: "Success",
          subText:
            "Successfully registered as an individual. Please check your email for verification.",
          type: "success",
        })
      );
      router.push("/email-verify");
    } else {
      handleSignUpError(actionResult, dispatch);
    }
  };

  // Separate function for business signup logic
  const handleBusinessSignUp = async (
    payload: SignUpFormValues,
    dispatch: AppDispatch
  ) => {
    const actionResult = await dispatch(signUpBusiness(payload));

    if (signUpBusiness.fulfilled.match(actionResult)) {
      sessionStorage.setItem("userEmail", payload.email);
      dispatch(
        addAlert({
          id: "",
          headText: "Success",
          subText:
            "Successfully registered as a business. Please check your email for verification.",
          type: "success",
        })
      );
      router.push("/email-verify");
    } else {
      handleSignUpError(actionResult, dispatch);
    }
  };

  // Handle errors for both individual and business signups
  const handleSignUpError = (actionResult: any, dispatch: AppDispatch) => {
    if (actionResult.error) {
      const errorMessage =
        actionResult.error?.message ||
        "An error occurred during registration. Please try again.";
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

  return (
    <Fragment>
      <h3 className="font-semibold text-[32px] leading-7 text-[#101928]">
        Step into your creative hub
      </h3>

      <form onSubmit={formik.handleSubmit} className="mt-5 space-y-5">
        <div className="flex gap-5">
          <InputField
            label="First name"
            type="text"
            placeholder="Enter first name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="firstName"
            error={
              formik.touched.firstName && formik.errors.firstName
                ? formik.errors.firstName
                : ""
            }
          />
          <InputField
            label="Last name"
            type="text"
            placeholder="Enter last name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="lastName"
            error={
              formik.touched.lastName && formik.errors.lastName
                ? formik.errors.lastName
                : ""
            }
          />
        </div>
        <InputField
          label="Email address"
          type="text"
          placeholder="Enter email address"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="email"
          icon={<EmailFieldIcon />}
          error={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""
          }
        />

        <InputField
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="password"
          icon={ showPassword ? <EyeIcon className="w-5 h-5" /> : <div className="size-5 bg-green-500"></div>}
          onInputIconClick={togglePasswordVisibility}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""
          }
        />

        <div className="-mt-5 center gap-2">
          {passwordCriteria.map((criterion, index) => {
            return (
              <div
                key={criterion.label}
                className="px-2 py-1 center gap-1 bg-[#F0F2F5] rounded-lg border border-[#D0D5DD]"
              >
                <div className="size-3">
                  {passwordValidation.some(
                    (v) => v.label === criterion.label && v.isValid
                  ) ? (
                    <div className="size-3 center">
                      <PasswordMatchIcon />
                    </div>
                  ) : (
                    <div className="size-3 center">
                      <PasswordNoMatchIcon />
                    </div>
                  )}
                </div>

                {/* <div className="size-3 bg-slate-300"></div> */}
                <p className="font-medium text-sm leading-5 text-[#98A2B3]">
                  {criterion.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* <div className="flex items-center justify-between">
        <CheckboxField label="Remember me" className="text-xs" />
        <Link
          href="/forgot-password"
          className="p-0 w-auto text-xs bg-transparent font-medium text-[#1574E5]"
        >
          Forgot Password
        </Link>
      </div> */}
        <Button
          label="Create account"
          isLoading={isLoading}
          type="submit"
          classNames="text-white font-semibold"
        />
      </form>
    </Fragment>
  );
}
