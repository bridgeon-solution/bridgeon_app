const join = [
  {
    title: "Your name",
    value: "",
    validation: {length:3},
    placeholder: "Enter your name",
  },
  {
    title: "Email",
    value: "",
    validation: {pattern:"@"},
    placeholder: "Enter email",
  },
  {
    title: "Phone",
    value: "",
    validation: {length:10},
    placeholder: "Enter phone number",
  },
];

const confirm = [
  {
    title: "OTP",
    value: "",
    validation: {length:4},
    placeholder: "Enter your OTP",
  },
  {
    title: "Password",
    value: "",

    placeholder: "Enter a password",
  },
  {
    title: "Password",
    value: "",
    placeholder: "Confirm password",
  },
];

export const setValidation = {
  joinValidation: join,
  confirmValidation: confirm,
};
