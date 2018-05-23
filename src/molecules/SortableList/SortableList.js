import React, { Children, Component } from "react";
import PropTypes from "prop-types";
import { List as SimpleList } from "../../molecules";
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from "react-sortable-hoc";

const SortableItem = SortableElement(({ children }) => children);
const List = SortableContainer(SimpleList);

class SortableList extends Component {
  static propTypes = {};
  static Item = SimpleList.Item;
  static move = arrayMove;

  renderItems() {
    const { children } = this.props;
    return Children.map(children, (child, index) => {
      return <SortableItem index={index}>{child}</SortableItem>;
    });
  }

  render() {
    const { children, direction, onSort } = this.props;
    return (
      <List
        direction={direction}
        axis={direction === "horizontal" ? "x" : "y"}
        lockAxis={direction === "horizontal" ? "x" : "y"}
        onSortEnd={onSort}
      >
        {this.renderItems()}
      </List>
    );
  }
}

export default SortableList;
