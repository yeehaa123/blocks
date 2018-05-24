Static InputList

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


<InputList
  title="Form Fields"
  name="form_fields"
  placeholder="input"
  items={state.items}
  errors={state.errors}
  onChange={onChange}
  onBlur={onBlur}
/>
```

Arrangeable InputList

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
  const items = state.items;
  items.splice(index, 1);
  setState({items });
};

const move = InputList.move;
const onSort = ({oldIndex, newIndex}) => {
  setState({
    items: move(state.items, oldIndex, newIndex),
    errors: move(state.errors, oldIndex, newIndex),
  });
};

<InputList
  arrangeable
  title="Form Fields"
  name="form_fields"
  placeholder="input"
  items={state.items}
  errors={state.errors}
  add={add}
  remove={remove}
  move={onSort}
  onChange={onChange}
  onBlur={onBlur}
/>
```
