Basic Form

```react|span-4
const onSubmit = (values, actions) => {
  actions.setSubmitting(false)
};

const onCancel = () => alert("Everyting is Erased!!!!");
const initialValues = {
  testField: "ab"
};


const Field = Form.Field;
<Form
  initialValues={initialValues}
  title="Test Form"
  onSubmit={onSubmit}
  onCancel={onCancel}
>
  <Field title="Test Field" name="testField" placeholder="Test" />
</Form>
```

Pimped Out Form

```react|span-4
state: { errors: {}}
---

const errors = {general: "you seem to have misspelled something..."};
const testItems1 = [{task: "aaaa", resourceUrl: "bbb"}, {task: "", resourceUrl: ""}];
const testItems2 = ["aaaaa", "bbbb"];

const onSubmit = (values, actions) => {
  setState({errors}),
  actions.setSubmitting(true)
};


const onCancel = () => alert("Everyting is Erased!!!!");
const initialValues = {
  testField: "ab",
  testItems: testItems2
};

const buttons = {
  warning: {
    title: "Maybe...",
    variant: "warning",
    onClick: () => confirm("are you sure"),
    size: "small"
  },
  cancel: {
    title: "HELL NO",
    size: "medium"
  },
  submit: {
    title: "Okay",
    size: "small"
  }
};

const linkData = [
  { onClick: onCancel, title: "Go Somewhere Else" },
  { onClick: onCancel, title: "Go Someplace Other" }
];

const Field = Form.Field;
const FieldList = Form.FieldList;
<Form
  initialValues={initialValues}
  errors={state.errors}
  title="Test Form"
  links={linkData}
  buttons={buttons}
  onSubmit={onSubmit}
  onCancel={onCancel}
>
  <Field title="Test Field" name="testField" placeholder="Test" />
  <FieldList title="Test Items" name="testItems"/>
</Form>
```
