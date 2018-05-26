import titleCase from "voca/title_case";
import lowerCase from "voca/lower_case";
import {
  map,
  construct,
  compose,
  curry,
  filter,
  flatten,
  identity,
  contains,
  addIndex,
  mapObjIndexed,
  mergeDeepRight,
  uniq,
  values,
  isEmpty
} from "ramda";
import { arrayMove as move } from "react-sortable-hoc";

const formatTitle = compose(titleCase, lowerCase);
const mapIndexed = addIndex(map);
const compact = filter(identity);
const merge = mergeDeepRight;
const mapObject = mapObjIndexed;

export {
  curry,
  compose,
  construct,
  map,
  move,
  filter,
  flatten,
  compact,
  contains,
  lowerCase,
  formatTitle,
  mapObject,
  merge,
  mapIndexed,
  uniq,
  values,
  isEmpty
};
