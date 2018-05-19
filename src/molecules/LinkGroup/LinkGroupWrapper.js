import system from "system-components";

export default system(
  {
    display: "flex",
    flexDirection: "horizontal",
    flex: 1,
    px: 0,
    pb: 0,
    pt: 0
  },
  "justifyContent"
).extend`
  a {
    margin-right: ${({ theme, flexDirection, spacing }) =>
      flexDirection === "row" ? theme.space[6] : 0};
    margin-bottom: ${({ theme, flexDirection, spacing }) =>
      flexDirection === "column" ? theme.space[6] : 0};

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
    }
  }
`;
