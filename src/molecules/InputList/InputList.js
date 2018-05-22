import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { mapIndexed } from "../../helpers";
import { Input } from "../../atoms";
import { List, ButtonGroup } from "../../molecules";

const Button = ButtonGroup.Button;

export default class InputList extends Component {
  static Input = Input;
  static propTypes = {};

  static defaultProps = {
    errors: [],
    items: []
  };

  renderItems() {
    const {
      items,
      errors,
      editable,
      placeholder,
      name,
      FieldComponent
    } = this.props;
    return mapIndexed((item, index) => {
      return (
        <FieldComponent
          {...item}
          hasErrors={!!errors[index]}
          mb={3}
          placeholder={placeholder}
          key={index}
          name={`${name}.${index}`}
        />
      );
    }, items);
  }

  renderButtons() {
    const { title, addItem } = this.props;
    return (
      <ButtonGroup pt={6} justifyContent="flex-end">
        <Button onClick={addItem}>{`Add ${title.slice(0, -1)}`}</Button>
      </ButtonGroup>
    );
  }

  render() {
    const { editable } = this.props;
    return (
      <Fragment>
        <List>{this.renderItems()}</List>
        {editable && this.renderButtons()}
      </Fragment>
    );
  }
}
