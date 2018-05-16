import { atoms, themes } from "blocks";
import { pageLoader } from "catalog";

const theme = themes.offcourse;

export default [
  {
    path: "/",
    title: "Welcome",
    content: pageLoader(() => import("./docs/WELCOME.md"))
  },
  {
    title: "Basics",
    pages: [
      {
        imports: {
          ...theme.colors,
          grayScale: theme.namedGrayScale
        },
        path: "/basics/colors",
        title: "Colors",
        content: pageLoader(() => import("./docs/basics/colors.md"))
      },
      {
        path: "/basics/typography",
        title: "Typography",
        content: pageLoader(() => import("./docs/basics/typography.md"))
      }
    ]
  },
  {
    title: "Atoms",
    pages: [
      {
        imports: { ...atoms },
        path: "/atoms/avatar",
        title: "Avatar",
        content: pageLoader(() => import("./docs/atoms/Avatar.md"))
      }
    ]
  }
];
