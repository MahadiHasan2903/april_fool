import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const SignUpPage = () => {
  const push = useNavigate();
  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState({
    email: "",
    full_name: "",
    password: "",
  });

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    validator.showMessages();
  };

  const [validator] = React.useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );

  const submitForm = async (e) => {
    e.preventDefault();

    if (validator.allValid()) {
      setLoading(true);

      const otp = Math.floor(100000 + Math.random() * 900000);

      const emailParams = {
        user_name: value.full_name,
        otp: otp,
        to_email: value.email,
      };

      try {
        await emailjs.send(
          "service_lskckh8", // Service ID
          "template_s3a41ht", // Template ID
          emailParams,
          "b6m2ibEG_uK-BVgH8" // Public Key
        );

        setValue({
          email: "",
          full_name: "",
          password: "",
        });

        validator.hideMessages();
        toast.success(
          "Registration initiated successfully! Check your email for OTP."
        );
        push("/verify");
        setLoading(false);
      } catch (error) {
        console.error("Email sending failed:", error);
        toast.error("Failed to send OTP. Please try again.");
        setLoading(false);
      }
    } else {
      validator.showMessages();
      toast.error("Empty field is not allowed!");
      setLoading(false);
    }
  };

  return (
    <Grid className="loginWrapper">
      <Grid className="loginForm">
        <h2>Signup</h2>
        <p>Signup your account</p>
        <form onSubmit={submitForm}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Full Name"
                value={value.full_name}
                variant="outlined"
                name="full_name"
                label="Name"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={changeHandler}
                onChange={changeHandler}
              />
              {validator.message(
                "full name",
                value.full_name,
                "required|regex:^[a-zA-Z. ]+$"
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="E-mail"
                value={value.email}
                variant="outlined"
                name="email"
                label="E-mail"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={changeHandler}
                onChange={changeHandler}
              />
              {validator.message("email", value.email, "required|email")}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Password"
                value={value.password}
                variant="outlined"
                name="password"
                label="Password"
                type="password"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={changeHandler}
                onChange={changeHandler}
              />
              {validator.message("password", value.password, "required")}
            </Grid>

            <Grid item xs={12}>
              <Grid className="formFooter">
                <Button
                  fullWidth
                  className="cBtn cBtnLarge cBtnTheme"
                  type="submit"
                >
                  {loading ? "Processing..." : "Sign Up"}
                </Button>
              </Grid>
              <Grid className="loginWithSocial">
                <Button className="facebook">
                  <i className="fa fa-facebook"></i>
                </Button>
                <Button className="twitter">
                  <i className="fa fa-twitter"></i>
                </Button>
                <Button className="linkedin">
                  <i className="fa fa-linkedin"></i>
                </Button>
              </Grid>
              <p className="noteHelp">
                Already have an account?{" "}
                <Link to="/login">Return to Sign In</Link>
              </p>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
