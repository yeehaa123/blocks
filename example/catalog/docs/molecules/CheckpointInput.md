```react|span-5,dark
state: {
  checkpoint: {
    task: "Hello World",
    resourceUrl: "/bla"
  },
  hasErrors: false
}
---

const onChange = (e) => {
  const { name , value } = e.target;
  const itemNames = name.split(".");
  const newState = { ...state };
  newState[itemNames[0]][itemNames[1]] = value;
  setState(newState);
};

const onBlur = () => {
  setState({hasErrors: !state.hasErrors});
};

const Icon = IconGroup.Icon;

<CheckpointInput hasErrors={state.hasErrors} onBlur={onBlur} onChange={onChange} name="checkpoint" value={state.checkpoint}>
  <IconGroup color="grayScale.2" direction="vertical" size="small">
    <Icon
      is="button"
      name="remove"
      tabIndex="-1"
    />
    <Icon is="button" name="sort" tabIndex="-1" />
  </IconGroup>
</CheckpointInput>
```
