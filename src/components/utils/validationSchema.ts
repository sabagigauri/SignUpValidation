import * as Yup from "yup";

const SignUpValidationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .required("required")
    .min(8, "Password must contain 8 letters"),
});

export default SignUpValidationSchema;
