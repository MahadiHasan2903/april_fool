import React, { useState } from "react";
import { Modal, Box, Typography, Grid } from "@mui/material";
import { captchaData } from "./data";
import aprilFoolImage from "../../images/captcha/april-fool.webp";
import { toast } from "react-toastify";

const CaptchaModal = ({ open, onClose }) => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [isAprilFool, setIsAprilFool] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});

  /**
   * currentCategory holds the data for the current category being displayed.
   * It is derived from the captchaData array using the currentCategoryIndex.
   */
  const currentCategory = captchaData[currentCategoryIndex];

  /**
   * handleOptionClick is invoked when a user clicks on an option in the current category.
   * It updates the selected options for the current category. If the option is already selected, it removes it;
   * if not, it adds it to the selected options.
   */
  const handleOptionClick = (optionIndex) => {
    setSelectedOptions((prevSelected) => {
      const categorySelected = prevSelected[currentCategoryIndex] || [];

      if (categorySelected.includes(optionIndex)) {
        return {
          ...prevSelected,
          [currentCategoryIndex]: categorySelected.filter(
            (index) => index !== optionIndex
          ),
        };
      } else {
        return {
          ...prevSelected,
          [currentCategoryIndex]: [...categorySelected, optionIndex],
        };
      }
    });
  };

  /**
   * handleSubmit is called when the user submits their selections for the current category.
   * It moves to the next category if there are more categories in the captchaData array.
   * If no options are selected in the current category, it shows an error toast.
   * If the last category is reached, it sets an April Fool's flag to true.
   */
  const handleSubmit = () => {
    const selectedForCurrentCategory =
      selectedOptions[currentCategoryIndex] || [];

    // Check if no options are selected for the current category
    if (selectedForCurrentCategory.length === 0) {
      toast.error("Please select at least one option before proceeding!");
      return;
    }

    if (currentCategoryIndex < captchaData.length - 1) {
      setCurrentCategoryIndex(currentCategoryIndex + 1);
    } else {
      setIsAprilFool(true);
    }
  };

  return (
    <Modal
      open={open}
      onClose={isAprilFool ? onClose : undefined}
      disableBackdropClick
    >
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
          maxWidth: "1200px",
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
              sx={{
                backgroundColor: "#5c6ac5",
                paddingX: { xs: "20px", sm: "50px" },
                paddingY: { xs: "15px", sm: "30px" },
                color: "white",
              }}
            >
              {currentCategory.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                marginY: "50px",
              }}
            >
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                gap={1}
              >
                {currentCategory.options.map((option, itemIndex) => (
                  <Grid
                    item
                    xs={12}
                    sm={5.8}
                    md={3.8}
                    key={itemIndex}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: `2px solid ${
                        selectedOptions[currentCategoryIndex]?.includes(
                          itemIndex
                        )
                          ? "#5c6ac5"
                          : "#666"
                      }`,
                      padding: "30px",
                      position: "relative",
                      cursor: "pointer",
                    }}
                    onClick={() => handleOptionClick(itemIndex)}
                  >
                    <Box
                      sx={{
                        minWidth: "100px",
                        minHeight: "70px",
                        width: "200px",
                        height: { xs: "100px", sm: "200px" },
                        borderRadius: 1,
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundImage: `url(${option.image})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      {selectedOptions[currentCategoryIndex]?.includes(
                        itemIndex
                      ) && (
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            borderRadius: "inherit",
                          }}
                        />
                      )}
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  marginTop: 2,
                }}
              >
                <div className="btns">
                  <button
                    type="button"
                    className="btn theme-btn"
                    onClick={handleSubmit}
                  >
                    Verify
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
