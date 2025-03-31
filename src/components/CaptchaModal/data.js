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

import bike1 from "../../images/captcha/bike1.png";
import bike2 from "../../images/captcha/bike2.png";
import bike3 from "../../images/captcha/bike3.png";
import bike4 from "../../images/captcha/bike4.png";
import bike5 from "../../images/captcha/bike5.png";
import bike6 from "../../images/captcha/bike6.png";

import cat1 from "../../images/captcha/cat1.png";
import cat2 from "../../images/captcha/cat2.png";
import cat3 from "../../images/captcha/cat3.png";
import cat4 from "../../images/captcha/cat4.png";
import cat5 from "../../images/captcha/cat5.png";
import cat6 from "../../images/captcha/cat6.png";

export const captchaData = [
  {
    title: "Select the shape with exactly seven sides.",
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
    title: "Select the bat",
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
    title: "Select the mouse",
    options: [
      {
        image: mouse1,
        answer: true,
      },
      {
        image: mouse2,
        answer: false,
      },
      // {
      //   image: mouse3,
      //   answer: false,
      // },
    ],
  },
  {
    title: "Select the bike",
    options: [
      {
        image: bike1,
        answer: true,
      },
      {
        image: bike2,
        answer: false,
      },
      {
        image: bike3,
        answer: false,
      },
      {
        image: bike4,
        answer: true,
      },
      {
        image: bike5,
        answer: false,
      },
      {
        image: bike6,
        answer: false,
      },
    ],
  },
  {
    title: "Find the cat",
    options: [
      {
        image: cat1,
        answer: true,
      },
      {
        image: cat2,
        answer: false,
      },
      {
        image: cat3,
        answer: false,
      },
      {
        image: cat4,
        answer: true,
      },
      {
        image: cat5,
        answer: false,
      },
      {
        image: cat6,
        answer: false,
      },
    ],
  },
];
