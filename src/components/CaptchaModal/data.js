import bat1 from "../../images/captcha/bat.png";
import bat2 from "../../images/captcha/cricket_bat.jpg";
import bat3 from "../../images/captcha/baseball_bat.jpg";

import mouse1 from "../../images/captcha/mouse1.png";
import mouse2 from "../../images/captcha/mouse2.jpeg";
import mouse3 from "../../images/captcha/mouse3.jpg";

import cloud1 from "../../images/captcha/cloud1.jpeg";
import cloud2 from "../../images/captcha/cloud2.png";
import cloud3 from "../../images/captcha/cloud3.jpg";
import cloud4 from "../../images/captcha/cloud4.jpg";
import cloud5 from "../../images/captcha/cloud5.jpg";
import cloud6 from "../../images/captcha/cloud6.png";

import circle from "../../images/captcha/circle.png";
import square from "../../images/captcha/square.png";
import pentagon from "../../images/captcha/pentagon.png";
import hexagon from "../../images/captcha/hexagon.png";
import octagon from "../../images/captcha/octagon.png";
import rectangle from "../../images/captcha/rectangle.png";

import math1 from "../../images/captcha/math1.png";
import math2 from "../../images/captcha/math2.png";
import math3 from "../../images/captcha/math3.png";
import math4 from "../../images/captcha/math4.png";
import math5 from "../../images/captcha/math5.png";
import math6 from "../../images/captcha/math6.png";

export const captchaData = [
  {
    title: "Select square with the circle",
    options: [
      {
        image: hexagon,
        answer: false,
      },
      {
        image: circle,
        answer: true,
      },
      {
        image: square,
        answer: false,
      },
      {
        image: pentagon,
        answer: false,
      },
      {
        image: octagon,
        answer: true,
      },
      {
        image: rectangle,
        answer: false,
      },
    ],
  },
  {
    title: "Select square with the bat",
    options: [
      {
        image: bat1,
        answer: true,
      },
      {
        image: bat2,
        answer: false,
      },
      {
        image: bat3,
        answer: false,
      },
    ],
  },
  {
    title: "Select squares with the cloud",
    options: [
      {
        image: cloud1,
        answer: true,
      },
      {
        image: cloud2,
        answer: false,
      },
      {
        image: cloud3,
        answer: false,
      },
      {
        image: cloud4,
        answer: true,
      },
      {
        image: cloud5,
        answer: false,
      },
      {
        image: cloud6,
        answer: false,
      },
    ],
  },
  {
    title: "Select square with the mouse",
    options: [
      {
        image: mouse1,
        answer: true,
      },
      {
        image: mouse2,
        answer: false,
      },
      {
        image: mouse3,
        answer: false,
      },
    ],
  },
  {
    title: "Select square with the convergent improper integrals",
    options: [
      {
        image: math1,
        answer: true,
      },
      {
        image: math2,
        answer: false,
      },
      {
        image: math3,
        answer: false,
      },
      {
        image: math4,
        answer: true,
      },
      {
        image: math5,
        answer: false,
      },
      {
        image: math6,
        answer: false,
      },
    ],
  },
];
