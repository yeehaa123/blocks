import system from "system-components";

const ListItemWrapper = system(
  {
    is: "li",
    display: "flex",
    lineHeight: 1,
    fontSize: 1,
    alignItems: "center",
    justifyContent: "space-between",
    color: "black"
  },
  "space",
  props => ({
    cursor: props.SortHandle ? "auto" : "pointer",
    boxSizing: "border-box",
    textDecoration: "inherit",
    fontFamily: props.theme.fonts.bold
  })
);

export default ListItemWrapper;
