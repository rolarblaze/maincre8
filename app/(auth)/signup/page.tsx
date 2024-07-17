"use client"
import { Fragment, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Tabs, InputField, Button, SocialSignUp } from "@/components";
import { Checked, EyeIcon, Unchecked } from "@/public/icons";
import { signUpIndividual, signUpBusiness } from "@/redux/auth/features";
import { addAlert } from "@/redux/alerts";
import { AppDispatch, useAppDispatch, useAppSelector } from "@/redux/store";
import { SignUpFormValues } from "@/redux/auth/interface";
import {
  validatePassword,
  passwordCriteria,
} from "@/utils/helpers/auth/passwordValidation";
import { useRouter } from "next/navigation";



const SignupSchema = Yup.object().shape({
  firstName: Yup.string().test(
    'required-first-name',
    'First name is required',
    function (value) {
      const { isBusiness } = this.parent;
      return isBusiness ? true : !!value;
    }
  ),
  lastName: Yup.string().test(
    'required-last-name',
    'Last name is required',
    function (value) {
      const { isBusiness } = this.parent;
      return isBusiness ? true : !!value;
    }
  ),
  businessName: Yup.string().test(
    'required-business-name',
    'Business name is required',
    function (value) {
      const { isBusiness } = this.parent;
      return isBusiness ? !!value : true;
    }
  ),
  email: Yup.string().email('Invalid email').required('Email address is required'),
  password: Yup.string().required('Password is required'),
});

export default function Signup() {
  const [activeTab, setActiveTab] = useState<string>("individual");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);
  const router = useRouter();

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
      await handleSignUp(values, dispatch);
    },
  });

  const passwordValidation = validatePassword(formik.values.password);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Signup function
  const handleSignUp = async (payload: SignUpFormValues, dispatch: AppDispatch) => {
    const action = activeTab === "individual" ? signUpIndividual : signUpBusiness;
    const actionResult = await dispatch(action(payload));

    if (signUpIndividual.fulfilled.match(actionResult) || signUpBusiness.fulfilled.match(actionResult)) {
      const { data } = actionResult.payload;
      sessionStorage.setItem("userEmail", payload.email); // Store email in session storage
      dispatch(
        addAlert({
          id: "",
          headText: "Success",
          subText: activeTab === "individual"
            ? "Successfully registered as an individual. Please check your email for verification."
            : "Successfully registered as a business. Please check your email for verification.",
          type: "success",
        })
      );
      router.push("/email-verify");
    } else if (signUpIndividual.rejected.match(actionResult) || signUpBusiness.rejected.match(actionResult)) {
      if (actionResult.error) {
        const errorMessage = actionResult.error?.message || "An error occurred during registration. Please try again.";
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
      <h3>Create your account</h3>
      <section className="w-full flex flex-col gap-4 border border-grey200 rounded-lg p-5 md:gap-8 md:p-10">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <form className="w-full flex flex-col gap-8" onSubmit={formik.handleSubmit}>
          <section className="flex flex-col gap-4 md:gap-6">
            {activeTab === "individual" && (
              <div className="flex items-center gap-2">
                <InputField
                  label="First name"
                  type="text"
                  placeholder="Enter first name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="firstName"
                  error={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : ""}
                />
                <InputField
                  label="Last name"
                  type="text"
                  placeholder="Enter last name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="lastName"
                  error={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : ""}
                />
              </div>
            )}
            {activeTab === "business" && (
              <InputField
                label="Business name"
                type="text"
                placeholder="Enter business name"
                value={formik.values.businessName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="businessName"
                error={formik.touched.businessName && formik.errors.businessName ? formik.errors.businessName : ""}
              />
            )}
            <InputField
              label="Email address"
              type="text"
              placeholder="Enter email address"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="email"
              error={formik.touched.email && formik.errors.email ? formik.errors.email : ""}
            />
            <div className="flex flex-col gap-4">
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
                error={formik.touched.password && formik.errors.password ? formik.errors.password : ""}
              />
              <div className="grid grid-cols-2 gap-2">
                {passwordCriteria.map((criterion, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 py-1 px-2 rounded-full border border-grey300 text-xs  text-grey500 font-medium"
                  >
                    <div className="transition-transform duration-500 ease-in-out">
                      {passwordValidation.some((v) => v.label === criterion.label && v.isValid) ? (
                        <Checked className="w-5 h-5" />
                      ) : (
                        <Unchecked className="w-5 h-5" />
                      )}
                    </div>
                    <p>{criterion.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <Button
            label="Create account"
            isLoading={isLoading}
            classNames="mt-4"
          />
        </form>
        <SocialSignUp />
      </section>
    </Fragment>
  );
}
