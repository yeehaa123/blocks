ButtonGroup can explicity declare icons

```react
const onClick = () => alert("click");
const Button = ButtonGroup.Button;

<ButtonGroup>
  <Button variant="positive" onClick={onClick}>
    Please Click
  </Button>
  <Button variant="primary" href="/">
    Click Now!
  </Button>
  <Button variant="negative" onClick={onClick}>
    Don't Click
  </Button>
</ButtonGroup>
```

Or it can pass the button data as a prop

```react
const onClick = () => alert("click");
const buttons = [
  { onClick, title: "Create Course" },
  { onClick, title: "Profile", variant: "warning" },
  { onClick, title: "Sign Out", variant: "negative" }
];
<ButtonGroup buttons={buttons} />;
```
