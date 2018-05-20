import titleCase from "voca/title_case";
import lowerCase from "voca/lower_case";
import { map, filter, contains, addIndex, compose, isEmpty } from "ramda";

const formatTitle = compose(titleCase, lowerCase);
const mapIndexed = addIndex(map);

export { map, filter, contains, lowerCase, formatTitle, mapIndexed, isEmpty };
