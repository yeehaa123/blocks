import system from "system-components";

const IconWrapper = system({
  is: "div",
  m: 0,
  p: 0,
  border: 0,
  fontSize: 1,
  lineHeight: 1,
  bg: "transparent",
  hover: {
    color: "primary"
  },
  focus: {
    outline: "none",
    color: "primary"
  }
}).extend`
  box-sizing: border-box;
`;

export default IconWrapper;
