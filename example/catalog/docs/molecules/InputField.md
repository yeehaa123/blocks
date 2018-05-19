Inputfield make handling with Inputs on Forms easier

```react
<InputField title="Goal of the Course" name="goal" placeholder="Goal" />
```

They can be small

```react
<InputField
  variant="small"
  title="Goal of the Course"
  name="goal"
  placeholder="Goal"
/>
```

They can contain multiple lines of text

```react
<InputField
  variant="textarea"
  title="Description of the Course"
  name="description"
  placeholder="Description"
/>
```

They can display errors

```react
<InputField
  errors={["Goal Too Short", "Goal Too Long"]}
  title="Goal of the Course"
  name="goal"
  placeholder="Goal"
/>
```

They can display sort, delete, or other handles

```react
const message = "hello world";
<InputField
  name="goal"
  placeholder="Goal"
  handles={<div onClick={() => alert(message)}>X</div>}
/>
```
