"use client";
import { Button, InputField, SocialSignUp } from "@/components";
import { Checked, EyeIcon, Unchecked } from "@/public/icons";
import { addAlert } from "@/redux/alerts";
import { loginUser } from "@/redux/auth/features";
import { AppDispatch, useAppDispatch, useAppSelector } from "@/redux/store";
import { validatePassword } from "@/utils/helpers/auth/passwordValidation";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import * as Yup from "yup";

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
      dispatch(
        addAlert({
          id: "",
          headText: "Success",
          subText: "Successfully logged in.",
          type: "success",
        })
      );
      router.push("/dashboard");
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
      <h3>Login to your account</h3>

      <section className="w-full flex flex-col gap-4 border border-grey200 rounded-lg p-5 md:gap-8 md:p-10">
        <form className="w-full flex flex-col" onSubmit={formik.handleSubmit}>
          <InputField
            label="Email address"
            type="text"
            placeholder="Enter email address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="email"
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""
            }
            classNames="mb-6"
          />

          <InputField
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="password"
            icon={<EyeIcon className="w-5 h-5" />}
            onInputIconClick={togglePasswordVisibility}
            error={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""
            }
            classNames="mb-2"
          />

          <Link
            href="/forgot-password"
            className="text-grey500 text-base text-right"
          >
            Forgot password?
          </Link>
          <div className="flex items-center gap-3 mb-3.5">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={handleRememberMeChange}
              className="hidden"
            />
            <label
              htmlFor="rememberMe"
              className="flex items-center gap-2 cursor-pointer"
            >
              {rememberMe ? <Checked /> : <Unchecked />}
              <span className="text-sm text-grey500">Remember me</span>
            </label>
          </div>
          <Button
            label="Login"
            isLoading={isLoading}
            type="submit"
            classNames="mt-4"
          />
        </form>
        <SocialSignUp isLogin />
      </section>
    </Fragment>
  );
}
