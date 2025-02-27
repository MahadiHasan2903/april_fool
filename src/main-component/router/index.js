import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../HomePage";
import AboutPage from "../AboutPage";
import ServicePage from "../ServicePage";
import ProjectPage from "../ProjectPage";
import PricingPage from "../PricingPage";
import ErrorPage from "../ErrorPage";
import ContactPage from "../ContactPage";
import LoginPage from "../LoginPage";
import VerifyPage from "../VerifyPage";
import SignUpPage from "../SignUpPage";
import ForgotPassword from "../ForgotPassword";

const AllRoute = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
