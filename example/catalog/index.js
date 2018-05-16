import React from "react";
import ReactDOM from "react-dom";
import { Catalog } from "catalog";
import pages from "./pages";
import { themes } from "blocks";

const { fonts, grayScale } = themes.offcourse;

const theme = {
  fontFamily: fonts.base,
  fontHeading: fonts.bold,
  fontMono: fonts.accents,
  pageHeadingBackground: grayScale[3]
};

ReactDOM.render(
  <Catalog title="Catalog" theme={theme} pages={pages} />,
  document.getElementById("catalog")
);
