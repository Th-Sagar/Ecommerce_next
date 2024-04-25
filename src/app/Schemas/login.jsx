import * as Yup from "yup";

export const loginInSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),

  password: Yup.string().password("Invalid password").required("Required").min(10, "Password is too short - should be 10 chars minimum."),
});
