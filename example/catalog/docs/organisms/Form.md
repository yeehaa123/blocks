```react|span-4
state: { errors: {}}
---

const errors = {general: ["you seem to have misspelled something..."]};

const onSubmit = (values, actions) => {
  setState({errors}),
  actions.setSubmitting(false)
};

const onCancel = () => alert("Everyting is Erased!!!!");
const initialValues = {
  testField: "ab"
};

const linkData = [
  { onClick: onCancel, title: "Go Somewhere Else" },
  { onClick: onCancel, title: "Go Someplace Other" }
];

<Form
  initialValues={initialValues}
  errors={state.errors}
  title="Test Form"
  links={linkData}
  cancelTitle="NO"
  submitTitle="YES"
  onSubmit={onSubmit}
  onCancel={onCancel}
>
  <Form.Field title="Test Field" name="testField" placeholder="Test" />
</Form>
```
