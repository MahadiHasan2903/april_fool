import React, { useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./style.scss";
import CaptchaModal from "../../components/CaptchaModal";

const VerifyPage = () => {
  const [value, setValue] = useState(Array(6).fill(""));
  const otpRefs = useRef([]);
  const [attempts, setAttempts] = useState(0);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const validator = new SimpleReactValidator({
    className: "errorMessage",
  });

  const handleOtpChange = (e, index) => {
    const updatedValue = [...value];
    const inputValue = e.target.value;

    if (inputValue.match(/^[0-9]{1}$/)) {
      updatedValue[index] = inputValue;
      setValue(updatedValue);

      if (index < 5 && otpRefs.current[index + 1]) {
        console.log("Focusing on next input:", index + 1); // Debug
        otpRefs.current[index + 1].focus();
      }
    } else if (inputValue === "") {
      updatedValue[index] = "";
      setValue(updatedValue);

      if (index > 0 && otpRefs.current[index - 1]) {
        console.log("Focusing on previous input:", index - 1); // Debug
        otpRefs.current[index - 1].focus();
      }
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (value.some((v) => v === "")) {
      toast.error("Please fill in all OTP fields!");
      return;
    }

    if (validator.allValid()) {
      const otp = value.join("");
      console.log("OTP:", otp);

      // Reset the OTP fields after successful submission
      setValue(Array(6).fill(""));

      // For testing purposes, show invalid OTP message even if correct
      toast.error("Invalid OTP, Try again!");
      setAttempts((prevAttempts) => prevAttempts + 1);

      if (attempts + 1 >= 3) {
        setShowCaptcha(true); // Open captcha after 3 attempts
      }

      validator.hideMessages();
    } else {
      validator.showMessages();
      toast.error("Empty field is not allowed!");
    }
  };

  useEffect(() => {
    console.log("OTP Refs:", otpRefs.current); // Debug
  }, []);

  return (
    <Grid className="loginWrapper">
      <Grid className="loginForm">
        <h2>2-Step Verification</h2>
        <p>Verify your account</p>
        <form onSubmit={submitForm}>
          <Grid container spacing={3} justifyContent="center">
            {value.map((_, index) => (
              <Grid item xs={2} key={index}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  value={value[index]}
                  variant="outlined"
                  name={`otp${index + 1}`}
                  inputProps={{
                    maxLength: 1,
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => handleOtpChange(e, index)}
                  ref={(el) => {
                    otpRefs.current[index] = el; // Assign ref
                    if (el && index === 0) {
                      el.focus(); // Ensure the first input is focused on initial render
                    }
                  }}
                  autoFocus={index === 0}
                />
              </Grid>
            ))}

            <Grid item xs={12}>
              <Grid className="formFooter">
                {showCaptcha ? (
                  <Button
                    fullWidth
                    className="cBtnTheme"
                    type="button"
                    onClick={() => {
                      setOpenModal(true);
                      setAttempts(0);
                    }}
                  >
                    Verify with captcha
                  </Button>
                ) : (
                  <Button fullWidth className="cBtnTheme" type="submit">
                    Verify
                  </Button>
                )}
              </Grid>

              <p className="noteHelp">
                Already have an account?{" "}
                <Link to="/login">Return to Sign In</Link>
              </p>
            </Grid>
          </Grid>
        </form>
        <div className="shape-img">
          <i className="fi flaticon-honeycomb"></i>
        </div>
      </Grid>

      {openModal && (
        <CaptchaModal
          open={showCaptcha}
          onClose={() => setShowCaptcha(false)}
        />
      )}
    </Grid>
  );
};

export default VerifyPage;
