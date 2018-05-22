import titleCase from "voca/title_case";
import lowerCase from "voca/lower_case";
import {
  map,
  filter,
  identity,
  contains,
  addIndex,
  compose,
  isEmpty
} from "ramda";

const formatTitle = compose(titleCase, lowerCase);
const mapIndexed = addIndex(map);
const keep = filter(identity);

export {
  map,
  filter,
  keep,
  contains,
  lowerCase,
  formatTitle,
  mapIndexed,
  isEmpty
};
