import system from "system-components";

export default system(
  {
    display: "flex",
    flexDirection: "horizontal",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    flex: 1,
    px: 0,
    pb: 0,
    pt: 0
  },
  "justifyContent"
).extend`
  button {
    margin-right: ${({ theme }) => theme.space[3]};

    &:last-child {
      margin-right: 0;
      }
    }
  }
`;
