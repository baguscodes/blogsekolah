import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const password = process.env.EMAIL_PASS;
console.log(email);
console.log(password);
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
  },
});
export const mailOptions = {
  from: email,
  to: email,
};
