```react
state: { items: ["", ""], errors: [null, "something went wrong"] }
---
const Input = InputList.Input;

const onChange = (e) => {
  const { name , value } = e.target;
  const items = [...state.items];
  const index = name.split(".")[1];
  items[index] = value;
  setState({ items })
};

const onBlur = (e) => {
  const { name , value } = e.target;
  const index = name.split(".")[1];
  const errors = state.items.map(() => null);
  errors[index] = "something went wrong";
  setState({ errors, value })
};

const add = () => {
  setState({items: [...state.items, ""]})
};

const remove = (index) => {
  console.log(index)
  const items = state.items;
  items.splice(index, 1);
  setState({items });
};

const move = (oldIndex, newIndex) =>
  alert(`the items moved from index ${oldIndex} to ${newIndex}`);

<InputList
  editable
  title="Form Fields"
  name="form_fields"
  placeholder="input"
  items={state.items}
  errors={state.errors}
  add={add}
  remove={remove}
  onChange={onChange}
  onBlur={onBlur}
/>
```
