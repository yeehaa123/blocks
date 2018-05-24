import titleCase from "voca/title_case";
import lowerCase from "voca/lower_case";
import {
  map,
  curry,
  filter,
  identity,
  contains,
  addIndex,
  mapObjIndexed,
  mergeDeepRight,
  compose,
  values,
  isEmpty
} from "ramda";
import { arrayMove as move } from "react-sortable-hoc";

const formatTitle = compose(titleCase, lowerCase);
const mapIndexed = addIndex(map);
const keep = filter(identity);
const merge = mergeDeepRight;
const mapObject = mapObjIndexed;

export {
  curry,
  map,
  move,
  filter,
  keep,
  contains,
  lowerCase,
  formatTitle,
  mapObject,
  merge,
  mapIndexed,
  values,
  isEmpty
};
