import system from "system-components";

export default system({
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  top: 0,
  left: 0,
  right: 0,
  bg: "white",
  flexDirection: "row",
  pr: 4,
  alignItems: "center",
  height: "2rem",
  zIndex: 2
}).extend`
  box-sizing: border-box
`;
