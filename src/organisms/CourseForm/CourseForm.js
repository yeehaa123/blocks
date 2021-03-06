import React, { Component } from "react";
import PropTypes from "prop-types";
import { CheckpointInput } from "../../molecules";
import { Form } from "../../organisms";
import Model from "./CourseModel";

const Field = Form.Field;
const FieldList = Form.FieldList;

export default class CourseForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
    mode: PropTypes.oneOf(["create", "edit"]),
    course: PropTypes.shape({
      goal: PropTypes.string.isRequired,
      checkpoints: PropTypes.array,
      description: PropTypes.string
    })
  };

  static defaultProps = {
    mode: "create"
  };

  render() {
    const { mode, errors, course, onCancel, onSubmit } = this.props;
    const title = `${mode} Course`;
    return (
      <Form
        Model={Model}
        values={new Model(course)}
        errors={errors}
        mode={mode}
        title={title}
        onSubmit={onSubmit}
        onCancel={onCancel}
      >
        <Field title="Goal" name="goal" placeholder="Goal" />
        <FieldList
          title="Checkpoints"
          emptyItem={new Model.Checkpoint()}
          name="checkpoints"
          FieldComponent={CheckpointInput}
        />
        <Field
          variant="textarea"
          title="Description"
          name="description"
          placeholder="Course Description"
        />
      </Form>
    );
  }
}
