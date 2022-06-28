import * as yup from "yup";
const passwordRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/;

export const registerSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(8, "Username must be at least 8 characters")
    .max(20, "Username must be less than 20 characters")
    .matches(/^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/, "First name and Last name required")
    .trim()
    .lowercase(),

  email: yup
    .string()
    .email("Please Enter valid email")
    .required("email is requires")
    .min(10)
    .max(50),

  password: yup
    .string()
    .required("Password is required")
    .matches(passwordRule, { message: "Please enter a stronger password" }),

  confirmPassword: yup
    .string()
    .required("Confirm Password required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
