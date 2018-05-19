import { atoms, molecules, themes } from "blocks";
import { pageLoader } from "catalog";
import createPages from "./createCollectionPages";

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
    pages: createPages({
      name: "atoms",
      blocks: atoms
    })
  },
  {
    title: "Molecules",
    pages: createPages({
      name: "molecules",
      blocks: molecules
    })
  }
];
