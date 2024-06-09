import TwoDimensional from "../models/twoDimentional";

export const FIGURE = [
  new TwoDimensional(
    "bd1",
    "Persegi",
    require("../assets/images/persegi.png"),
    "4 x s",
    "s x s",
    4
  ),
  new TwoDimensional(
    "bd2",
    "Persegi Panjang",
    require("../assets/images/persegi panjang.png"),
    "(2 x p) + (2 X l) = 2 (p x l)",
    "p x l",
    5
  ),
  new TwoDimensional(
    "bd3",
    "Segitiga",
    require("../assets/images/segi tiga.png"),
    "a + b + c  ",
    "1/2 x a x t",
    6
  ),
  new TwoDimensional(
    "bd4",
    "Trapesium",
    require("../assets/images/trapesium.png"),
    "a + b + c + d ",
    "(a + b) / 2 x t",
    8
  ),
  new TwoDimensional(
    "bd5",
    "Jajar Genjang",
    require("../assets/images/jajar genjang.png"),
    "a + b + c + d ",
    "a x t",
    6
  ),
  new TwoDimensional(
    "bd6",
    "Layang-layang",
    require("../assets/images/layang layang.png"),
    "a + b + c + d ",
    "1/2 x d1 x d2",
    7
  ),
  new TwoDimensional(
    "bd7",
    "Belah Ketupat",
    require("../assets/images/belah ketupat.png"),
    "a + b + c + d ",
    "1/2 x d1 x d2",
    7
  ),
  new TwoDimensional(
    "bd8",
    "Lingkaran",
    require("../assets/images/lingkaran.png"),
    "2 x phi x r",
    "phi x r x r",
    6
  ),
];
