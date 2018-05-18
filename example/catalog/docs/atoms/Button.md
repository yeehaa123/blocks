Default and Disabled Button

```react|span-2
const clickHandler = () => alert("ALERT");
<Button onClick={clickHandler}>Click Me</Button>
```

```react|span-2
const clickHandler = () => alert("ALERT");
<Button onClick={clickHandler} disabled>
  Cannot Click
</Button>
```

Meaningful variants

```react|span-2
const clickHandler = () => alert("ALERT");
  <Button variant="primary" href="/">
    Click Now!
  </Button>
```

```react|span-2
const clickHandler = () => alert("ALERT");
  <Button variant="positive" onClick={clickHandler}>
    Please Click
  </Button>
```

```react|span-2
const clickHandler = () => alert("ALERT");
  <Button variant="negative" onClick={clickHandler}>
    Don't Click
  </Button>
```
