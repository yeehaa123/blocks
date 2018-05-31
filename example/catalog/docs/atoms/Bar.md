Bars can be docked at the top...

```react|frame
<Bar>
  <Heading>Hello World</Heading>
  <Heading>Hello World</Heading>
  <Heading>Hello World</Heading>
</Bar>
```

...or the bottom of the window

```react|frame
<Bar docked="bottom">
  <Heading>Hello World</Heading>
  <Heading>Hello World</Heading>
  <Heading>Hello World</Heading>
</Bar>
```

they are fixed by default, but this behaviour can be overridden with the position 'prop'

```react
<Bar position="absolute" docked="top">
  <Heading>Hello World</Heading>
  <Heading>Hello World</Heading>
  <Heading>Hello World</Heading>
</Bar>
```
