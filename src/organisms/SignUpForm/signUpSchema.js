import yup from "yup";

export default yup.object().shape({
  userName: yup
    .string()
    .min(4)
    .matches(/^[a-z]+$/, "user name cannot have spaces or special characters")
    .strict()
    .required(),
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(8)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/,
      "password must have at least one uppercase letter, one lowercase letter, one number and one special character"
    )
    .required()
});
