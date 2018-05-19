```react
<InputField title="Goal of the Course" name="goal" placeholder="Goal" />
```

```react
<InputField
  variant="small"
  title="Goal of the Course"
  name="goal"
  placeholder="Goal"
/>
```

```react
<InputField
  variant="textarea"
  title="Description of the Course"
  name="description"
  placeholder="Description"
/>
```

```react
<InputField
  errors={["Goal Too Short", "Goal Too Long"]}
  title="Goal of the Course"
  name="goal"
  placeholder="Goal"
/>
```

```react
const message = "hello world";
<InputField
  name="goal"
  placeholder="Goal"
  handles={<div onClick={() => alert(message)}>X</div>}
/>
```
