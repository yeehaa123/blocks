```react
const Input = InputList.Input;

<InputList
  placeholder="input"
  title="Form Fields"
  name="form_fields"
  items={["", ""]}
  FieldComponent={Input}
/>
```

```react
const Input = InputList.Input;

<InputList
  errors={[null, "something went wrong"]}
  placeholder="input"
  title="Form Fields"
  name="form_fields"
  items={["", ""]}
  FieldComponent={Input}
/>
```

```react
state: {items: ["", ""]}
---
const Input = InputList.Input;

const addItem = () => {
  setState({items: [...state.items, ""]})
};

<InputList
  editable
  addItem={addItem}
  placeholder="input"
  title="Form Fields"
  name="form_fields"
  items={state.items}
  FieldComponent={Input}
/>
```
