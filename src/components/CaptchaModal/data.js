import bat1 from "../../images/captcha/bat.png";
import bat2 from "../../images/captcha/cricket_bat.jpg";
import bat3 from "../../images/captcha/baseball_bat.jpg";

import swt1 from "../../images/captcha/swt1.png";
import swt2 from "../../images/captcha/swt2.png";
import swt3 from "../../images/captcha/swt3.png";
import swt4 from "../../images/captcha/swt4.png";

import circle from "../../images/captcha/circle.png";
import square from "../../images/captcha/square.png";
import hexagon from "../../images/captcha/hexagon.png";

import is1 from "../../images/captcha/is1.png";
import is2 from "../../images/captcha/is2.png";
import is3 from "../../images/captcha/is3.png";

import captchaString1 from "../../images/captcha/captcha1.png";

export const captchaData = [
  {
    title: "Which one is circle",
    options: [
      {
        optionText: "A",
        image: hexagon,
        answer: false,
      },
      {
        optionText: "B",
        image: circle,
        answer: true,
      },
      {
        optionText: "C",
        image: square,
        answer: false,
      },
    ],
  },
  {
    title: "Choose the bat",
    options: [
      {
        optionText: "A",
        image: bat1,
        answer: true,
      },
      {
        optionText: "B",
        image: bat2,
        answer: false,
      },
      {
        optionText: "C",
        image: bat3,
        answer: false,
      },
    ],
  },
  {
    title: "Write the text shown below:",
    options: [
      {
        optionText: "",
        image: captchaString1,
        answer: false,
      },
    ],
  },
  {
    title: "Select square with Convergent Improper Integrals",
    options: [
      {
        optionText: "A",
        image: swt1,
        answer: false,
      },
      {
        optionText: "B",
        image: swt2,
        answer: false,
      },
      {
        optionText: "C",
        image: swt3,
        answer: false,
      },
      {
        optionText: "C",
        image: swt4,
        answer: false,
      },
    ],
  },
  {
    title:
      "Select the square with a triangle inside a circle that's also a hexagon",
    options: [
      {
        // optionText: "A",
        image: is1,
        answer: false,
      },
      {
        // optionText: "B",
        image: is2,
        answer: false,
      },
      {
        // optionText: "C",
        image: is3,
        answer: false,
      },
    ],
  },
];
