"use client";
import { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/navigation";
import { setUserTokenCookie } from "@/utils/helpers/auth/cookieUtility";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InputField, Button } from "@/components";
import {
  EyeOpenIcon,
  EyeCloseIcon,
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

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email address is required"),
  password: Yup.string().required("Password is required")
});

export default function Signup() {
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
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      await handleIndividualSignUp(values, dispatch);
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
    dispatch: AppDispatch,
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
        }),
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
        }),
      );
    }
  };

  return (
    <Fragment>
      <h3 className="text-[32px] font-semibold leading-7 text-[#101928]">
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
          icon={
            showPassword ? (
              <EyeOpenIcon className="h-5 w-5" />
            ) : (
              <EyeCloseIcon className="h-5 w-5" />
            )
          }
          onInputIconClick={togglePasswordVisibility}
          error={
            formik.errors.password
              ? formik.errors.password
              : ""
          }
        />

        {/* Password Match Criteria */}
        <div className="center -mt-5 gap-2">
          {passwordCriteria.map((criterion, index) => {
            return (
              <div
                key={criterion.label}
                className="center gap-1 rounded-lg border border-[#D0D5DD] bg-[#F0F2F5] px-2 py-1"
              >
                <div className="size-3">
                  {passwordValidation.some(
                    (v) => v.label === criterion.label && v.isValid,
                  ) ? (
                    <div className="center size-3">
                      <PasswordMatchIcon />
                    </div>
                  ) : (
                    <div className="center size-3">
                      <PasswordNoMatchIcon />
                    </div>
                  )}
                </div>

                <p className="text-sm font-medium leading-5 text-[#98A2B3]">
                  {criterion.label}
                </p>
              </div>
            );
          })}
        </div>
        {

        }

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
