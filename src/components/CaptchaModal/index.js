import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import { captchaData } from "./data";
import { toast } from "react-toastify";
import aprilFoolImage from "../../images/captcha/april-fool.webp";

const CaptchaModal = ({ open, onClose }) => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [answer, setAnswer] = useState(""); // State for storing user input
  const [isAprilFool, setIsAprilFool] = useState(false); // State to show April Fools image

  const handleSubmit = () => {
    // Check if the answer is provided
    if (!answer.trim()) {
      toast.error("Please write your answer!");
      return;
    }

    const currentCategory = captchaData[currentCategoryIndex];

    // Check if the answer matches the optionText with answer: true
    const correctOption = currentCategory.options.find(
      (option) => option.answer
    );
    if (
      correctOption &&
      correctOption.optionText &&
      correctOption.optionText.toLowerCase() === answer.toLowerCase()
    ) {
      toast.success("Correct Answer, Jump to the next one!");
    } else {
      toast.error("Wrong answer, Jump to the next one!");
    }

    if (currentCategoryIndex < captchaData.length - 1) {
      setCurrentCategoryIndex(currentCategoryIndex + 1);
      setAnswer("");
    } else {
      setIsAprilFool(true); // If last category, show the April Fools image
    }
  };

  const currentCategory = captchaData[currentCategoryIndex];

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          padding: 3,
          maxHeight: "90vh",
          overflow: "auto",
          width: "90%",
          maxWidth: "1000px",
        }}
      >
        {isAprilFool ? (
          <Box sx={{ textAlign: "center" }}>
            <img
              src={aprilFoolImage}
              alt="April Fool!"
              style={{ width: "100%", maxHeight: "80vh" }}
            />
          </Box>
        ) : (
          <>
            <Typography
              variant="h3"
              gutterBottom
              textAlign="center"
              fontWeight={500}
              sx={{ marginTop: "20px", marginBottom: "50px" }}
            >
              Verify yourself using captcha
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "30px",
              }}
            >
              <Typography variant="h4" gutterBottom fontWeight={300}>
                Q: {currentCategory.title}
              </Typography>

              <Grid container spacing={3} justifyContent="center">
                {currentCategory.options.map((option, itemIndex) => (
                  <Grid item xs={12} sm={6} md={4} key={itemIndex}>
                    <Paper
                      sx={{
                        position: "relative",
                        padding: 2,
                        textAlign: "center",
                        backgroundColor: "transparent",
                        borderRadius: 1,
                        transition: "background-color 0.3s",
                      }}
                    >
                      <Box
                        sx={{
                          minWidth: "100px",
                          minHeight: "70px",
                          width: "260px",
                          height: "200px",
                          borderRadius: 1,
                          overflow: "hidden",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={option.image}
                          alt="Option"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            objectPosition: "center",
                          }}
                        />
                      </Box>

                      {option.optionText && (
                        <Typography variant="h6" sx={{ marginTop: 1 }}>
                          {option.optionText}
                        </Typography>
                      )}
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              <TextField
                fullWidth
                label="Answer"
                variant="outlined"
                placeholder="Write your answer..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)} // Bind answer state to the text field
                sx={{ marginTop: 1 }}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  marginTop: 2,
                  gap: "10px",
                }}
              >
                <div className="btns">
                  <button
                    type="button"
                    className="btn theme-btn"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>

                <div className="btns">
                  <button
                    type="button"
                    className="btn"
                    onClick={onClose}
                    style={{
                      background: "#666666",
                      color: "#ffffff",
                      display: "inline-block",
                      padding: "14px 45px",
                      borderRadius: "6px",
                      textTransform: "capitalize",
                      boxShadow: " 0 0 0 5px #fff",
                      fontFamily: "Futura PT",
                      fontSize: "1.3333333333rem",
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default CaptchaModal;
