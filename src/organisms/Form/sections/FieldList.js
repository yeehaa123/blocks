import React, { Component } from "react";
import PropTypes from "prop-types";
import { FieldArray } from "formik";
import { Section } from "../../../atoms";
import { CheckpointInput, InputField, InputList } from "../../../molecules";

export default class FieldList extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  };

  static defaultProps = {
    emptyItem: ""
  };

  render() {
    const {
      title,
      name,
      emptyItem,
      placeholder,
      FieldComponent,
      children
    } = this.props;
    return (
      <Section>
        <FieldArray name={name}>
          {({ form, push, remove, move }) => {
            const { dirty, handleChange, values, touched, errors } = form;
            const items = values[name];
            return (
              <InputField name={name} title={title}>
                <InputList
                  arrangeable
                  title={title}
                  name={name}
                  placeholder={placeholder}
                  items={items}
                  add={() => push(emptyItem)}
                  move={({ oldIndex, newIndex }) => move(oldIndex, newIndex)}
                  remove={remove}
                  errors={["", ""]}
                  onChange={handleChange}
                  FieldComponent={FieldComponent}
                  onBlur={() => {}}
                />
              </InputField>
            );
          }}
        </FieldArray>
      </Section>
    );
  }
}
