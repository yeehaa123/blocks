import React from "react";
import styled, { ThemeProvider } from "styled-components";
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
  <ThemeProvider theme={themes.offcourse}>
    <Catalog title="Documentation" theme={theme} pages={pages} />
  </ThemeProvider>,
  document.getElementById("catalog")
);
