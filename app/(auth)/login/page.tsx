"use client";
import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import * as Yup from "yup";
import { useFormik } from "formik";
import { AppDispatch, useAppDispatch, useAppSelector } from "@/redux/store";
import { addAlert } from "@/redux/alerts";
import { loginUser } from "@/redux/auth/features";
import { validatePassword } from "@/utils/helpers/auth/passwordValidation";
import { Button, InputField, SocialSignUp } from "@/components";
import { Checked, EmailAddressIcon, EmailFieldIcon, EyeCloseIcon, EyeOpenIcon } from "@/public/icons";
import CheckboxField from "@/components/Forms/Checkbox";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email address is required"),
  password: Yup.string().required("Password is required"),
});


export default function Login() {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    // Check if there's any stored login details in localStorage
    const savedLoginDetails = localStorage.getItem("loginDetails");
    if (savedLoginDetails) {
      const { email, password } = JSON.parse(savedLoginDetails);
      formik.setValues({ email, password });
      setRememberMe(true);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      await handleLogin(values, dispatch);
    },
  });

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const passwordValidation = validatePassword(formik.values.password);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleLogin = async (
    payload: { email: string; password: string },
    dispatch: AppDispatch
  ) => {
    const actionResult = await dispatch(loginUser(payload));

    if (loginUser.fulfilled.match(actionResult)) {
      if (rememberMe) {
        // Store the login details in localStorage
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ email: payload.email, password: payload.password })
        );
      } else {
        // Clear login details from localStorage if "Remember Me" is not checked
        localStorage.removeItem("loginDetails");
      }

      dispatch(
        addAlert({
          id: "",
          headText: "Success",
          subText: "Successfully logged in.",
          type: "success",
        })
      );

      // Check redirect parameter
      const redirect = new URLSearchParams(window.location.search).get("redirect");
      router.push(redirect || "/dashboard");
    } else if (loginUser.rejected.match(actionResult)) {
      if (actionResult.error) {
        const errorMessage =
          actionResult.error?.message ||
          "An error occurred during login. Please try again.";
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
    <Fragment>
      <h3 className="font-semibold text-[32px] leading-7 text-[#101928]">
        Dive back in
      </h3>
      <form onSubmit={formik.handleSubmit} className="mt-5 space-y-7">
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
          icon={showPassword ? <EyeCloseIcon className="w-5 h-5" /> : <EyeOpenIcon className="w-5 h-5" />}
          onInputIconClick={togglePasswordVisibility}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""
          }
        />
        <div className="flex items-center justify-between">
          <CheckboxField
            checked={rememberMe}
            onChange={handleRememberMeChange}
            label="Remember me"
            className="text-xs"
          />
          <Link
            href="/forgot-password"
            className="p-0 w-auto text-xs bg-transparent font-medium text-[#1574E5]"
          >
            Forgot Password?
          </Link>
        </div>
        <Button
          isLoading={isLoading}
          type="submit"
          label="Login to Dashboard"
          classNames="text-white font-semibold"
        />
      </form>
    </Fragment>
  );
}
