import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import Form from "../Form";
import { PasswordInput } from "../../molecules";

const blankUser = {
  userName: "",
  confirmationCode: "",
  password: ""
};

const PasswordRetrievalForm = ({
  confirmMode,
  userName,
  onSubmit,
  onCancel,
  links,
  errors
}) => {
  const mode = confirmMode ? "confirm" : "normal";

  return (
    <Form
      initialValues={userName ? { ...blankUser, userName } : blankUser}
      errors={errors}
      mode={mode}
      links={links}
      onSubmit={onSubmit}
      onCancel={onCancel}
      title="Retrieve Password"
    >
      <Form.Field title="User Name" name="userName" placeholder="User Name" />
      {confirmMode && (
        <Form.Field
          title="Confirmation Code"
          name="confirmationCode"
          placeholder="Confirmation Code"
        />
      )}
      {confirmMode && (
        <Form.Field
          title="New Password"
          type="password"
          FieldComponent={PasswordInput}
          name="password"
          placeholder="Password"
        />
      )}
    </Form>
  );
};

PasswordRetrievalForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  onRequestSignIn: PropTypes.func,
  confirmMode: PropTypes.bool,
  userName: PropTypes.string,
  errors: PropTypes.shape({
    userName: PropTypes.string,
    confirmationCode: PropTypes.string,
    password: PropTypes.string
  })
};

export default PasswordRetrievalForm;
