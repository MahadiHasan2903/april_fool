import React, { useState, useEffect, useRef } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import CaptchaModal from "../../components/CaptchaModal";
import "./style.scss";

const VerifyPage = () => {
  const [otpValues, setOtpValues] = useState(Array(6).fill(""));
  const [openModal, setOpenModal] = useState(true);
  const [resendTimer, setResendTimer] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [emailResend, setEmailResend] = useState(false);
  const otpRefs = useRef(Array(6).fill(null));

  /**
   * useEffect hook to handle the OTP resend timer functionality.
   * If resend is disabled, it starts a countdown from 60 seconds and disables the resend button.
   * Once the timer reaches 0, it enables the resend button and resets the timer to 60.
   */
  useEffect(() => {
    let timer;
    if (isResendDisabled && resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    } else if (resendTimer === 0) {
      setIsResendDisabled(false);
      setResendTimer(60);
    }
    return () => clearInterval(timer);
  }, [isResendDisabled, resendTimer]);

  /**
   * handleResendClick is invoked when the user clicks the 'Resend OTP' button.
   * It checks if the resend is allowed, generates a new OTP, updates localStorage with the new OTP,
   * and sends the OTP to the user's email via emailjs.
   * Disables the resend button and starts the resend timer.
   * Displays success or error messages based on the outcome.
   */
  const handleResendClick = async () => {
    if (isResendDisabled) {
      return;
    }

    const storedData = localStorage.getItem("formData");
    if (!storedData) {
      toast.error("User data not found. Please register again.");
      return;
    }

    setEmailResend(true);

    const userData = JSON.parse(storedData);

    // Generate new OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // Update localStorage with new OTP
    const updatedData = { ...userData, otp };
    localStorage.setItem("formData", JSON.stringify(updatedData));

    setIsResendDisabled(true);
    setResendTimer(60);

    const emailParams = {
      user_name: userData.full_name,
      otp: otp,
      to_email: userData.email,
    };

    try {
      await emailjs.send(
        "service_lskckh8",
        "template_s3a41ht",
        emailParams,
        "b6m2ibEG_uK-BVgH8"
      );
      toast.success("OTP resent successfully!");
    } catch (error) {
      toast.error("Something went wrong, Please try again!");
    } finally {
      setEmailResend(false);
    }
  };

  /**
   * handleOtpChange is called whenever the user enters or removes a digit in the OTP input fields.
   * It updates the OTP values in the state and automatically moves the focus to the next or previous input field
   * based on whether the user entered a valid digit or deleted a digit.
   */
  const handleOtpChange = (e, index) => {
    const inputValue = e.target.value;
    const updatedValues = [...otpValues];

    if (/^[0-9]$/.test(inputValue)) {
      updatedValues[index] = inputValue;
      setOtpValues(updatedValues);

      // Move to the next input field if it exists
      if (index < otpRefs.current.length - 1) {
        otpRefs.current[index + 1].focus();
      }
    } else if (inputValue === "") {
      updatedValues[index] = "";
      setOtpValues(updatedValues);

      // Move to the previous input field if it exists
      if (index > 0) {
        otpRefs.current[index - 1].focus();
      }
    }
  };

  /**
   * submitForm is called when the user submits the OTP form.
   * It validates that all OTP fields are filled and compares the entered OTP with the stored OTP.
   * If the OTP is correct, it clears the form data from localStorage, shows a success message, and opens a modal.
   * If the OTP is incorrect, it displays an error message.
   */
  const submitForm = (e) => {
    e.preventDefault();

    if (otpValues.some((v) => v === "")) {
      toast.error("Please fill in all OTP fields!");
      return;
    }

    const storedData = localStorage.getItem("formData");
    if (!storedData) {
      toast.error("No user data found.");
      return;
    }

    const userData = JSON.parse(storedData);
    const storedOtp = userData.otp;

    const enteredOtp = otpValues.join("");

    if (Number(storedOtp) === Number(enteredOtp)) {
      localStorage.removeItem("formData");
      setOpenModal(true);
      toast.success("OTP Verified Successfully!");
      setOtpValues(Array(6).fill("")); // Reset OTP input fields
    } else {
      toast.error("Invalid OTP, Try again!");
    }
  };

  return (
    <Grid className="loginWrapper">
      <Grid className="loginForm">
        <h2>2-Step Verification</h2>
        <p>Verify your account</p>
        <form onSubmit={submitForm}>
          <Grid container spacing={2} justifyContent="center">
            {otpValues.map((_, index) => (
              <Grid item xs={2} key={index}>
                <TextField
                  fullWidth
                  variant="outlined"
                  value={otpValues[index]}
                  inputProps={{ maxLength: 1 }}
                  onChange={(e) => handleOtpChange(e, index)}
                  inputRef={(el) => (otpRefs.current[index] = el)}
                  autoFocus={index === 0}
                />
              </Grid>
            ))}

            <Grid item xs={12}>
              <Button fullWidth className="cBtnTheme" type="submit">
                Verify
              </Button>
              <p className="noteHelp">
                <span
                  style={{
                    color: isResendDisabled ? "#999" : "#3757f7",
                    cursor: isResendDisabled ? "default" : "pointer",
                  }}
                  onClick={handleResendClick}
                >
                  {emailResend ? "Processing" : " Resend"}
                </span>
                {isResendDisabled ? ` after ${resendTimer} seconds` : ""}
              </p>
              <p className="noteHelp">
                Already have an account?{" "}
                <Link to="/login">Return to Sign In</Link>
              </p>
            </Grid>
          </Grid>
        </form>
      </Grid>

      {openModal && (
        <CaptchaModal open={openModal} onClose={() => setOpenModal(false)} />
      )}
    </Grid>
  );
};

export default VerifyPage;
