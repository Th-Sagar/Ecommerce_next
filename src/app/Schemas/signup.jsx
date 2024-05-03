import * as Yup from "yup";

export const signupSchema = Yup.object({
  UserName: Yup.string()
    .required("UserName is required")
    .min(3, "UserName must be at least 3 characters"),
  Email: Yup.string().email("Invalid email").required("Email is required"),
  PhoneNumber: Yup.string()
    .required("Phone Number is required")
    .min(10, "PhoneNumber must be at least 10 characters"),
  Password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});
