import React, { useState, useEffect, useRef } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import CaptchaModal from "../../components/CaptchaModal";
import "./style.scss";

const VerifyPage = () => {
  const [otpValues, setOtpValues] = useState(Array(6).fill(""));
  const [openModal, setOpenModal] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [emailResend, setEmailResend] = useState(false);
  const otpRefs = useRef(Array(6).fill(null));

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

  const handleResendClick = async () => {
    if (isResendDisabled) {
      return;
    }

    // Retrieve user data from localStorage
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
        "service_lskckh8", // Service ID
        "template_s3a41ht", // Template ID
        emailParams,
        "b6m2ibEG_uK-BVgH8" // Public Key
      );
      toast.success("OTP resent successfully!");
    } catch (error) {
      toast.error("Something went wrong, Please try again!");
    } finally {
      setEmailResend(false);
    }
  };

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

  const submitForm = (e) => {
    e.preventDefault();

    if (otpValues.some((v) => v === "")) {
      toast.error("Please fill in all OTP fields!");
      return;
    }

    const storedData = localStorage.getItem("formData");
    const userData = JSON.parse(storedData);
    const storedOtp = userData.otp;

    const enteredOtp = otpValues.join("");

    if (Number(storedOtp) === Number(enteredOtp)) {
      localStorage.removeItem("otp");
      setOpenModal(true);
      toast.success("OTP Verified Successfully!");
      setOtpValues(Array(6).fill(""));
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
