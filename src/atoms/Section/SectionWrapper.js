import system from "system-components";

const SectionWrapper = system(
  {
    is: "section",
    p: 6,
    borderBottom: 1,
    borderColor: "grayScale.1"
  },
  "justifyContent",
  "display"
);

export default SectionWrapper;
