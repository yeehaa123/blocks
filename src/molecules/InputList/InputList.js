import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { mapIndexed } from "../../helpers";
import { Input } from "../../atoms";
import { List, IconGroup, ButtonGroup } from "../../molecules";

const Button = ButtonGroup.Button;
const Icon = IconGroup.Icon;

export default class InputList extends Component {
  static Input = Input;
  static propTypes = {
    /** list of elements that need to be entered */
    items: PropTypes.arrayOf(PropTypes.string),
    /** list of errors corresponding to these items */
    errors: PropTypes.arrayOf(PropTypes.string),
    /** field that indicates if the form itself is editable (add, remove, move, etc...) */
    editable: PropTypes.bool,
    /** title of the field (i.e. label) */
    title: PropTypes.string.isRequired,
    /** name of the field */
    name: PropTypes.string.isRequired,
    /** placeholder for the value of the field */
    placeholder: PropTypes.string,
    /** function that adds a new items to the list */
    add: PropTypes.func,
    /** function that removes an item from the list */
    remove: PropTypes.func,
    /** function that moves an item to another position */
    move: PropTypes.func,
    /** handler for when a list value changes */
    onChange: PropTypes.func.isRequired,
    /** handler for when a field loses focus */
    onBlur: PropTypes.func,
    /** optional component that can be rendered instead of the default one */
    FieldComponent: PropTypes.func
  };

  static defaultProps = {
    editable: false,
    placeholder: "edit this",
    errors: [],
    items: [],
    FieldComponent: Input
  };

  renderHandles(index) {
    const { editable, remove, move } = this.props;
    return (
      editable && (
        <IconGroup>
          <Icon
            size="small"
            tabIndex="-1"
            name="remove"
            onClick={() => remove(index)}
          />
          <Icon size="small" tabIndex="-1" name="sort" />
        </IconGroup>
      )
    );
  }

  renderFields() {
    const {
      items,
      errors,
      placeholder,
      name,
      onChange,
      onBlur,
      FieldComponent
    } = this.props;
    return mapIndexed((item, index) => {
      return (
        <FieldComponent
          value={item}
          onChange={onChange}
          onBlur={onBlur}
          hasErrors={!!errors[index]}
          mb={3}
          placeholder={placeholder}
          key={index}
          name={`${name}.${index}`}
        >
          {this.renderHandles(index)}
        </FieldComponent>
      );
    }, items);
  }

  renderButtons() {
    const { editable, title, add } = this.props;
    return (
      editable && (
        <ButtonGroup pt={6} justifyContent="flex-end">
          <Button onClick={add}>{`Add ${title.slice(0, -1)}`}</Button>
        </ButtonGroup>
      )
    );
  }

  render() {
    return (
      <Fragment>
        <List>{this.renderFields()}</List>
        {this.renderButtons()}
      </Fragment>
    );
  }
}
