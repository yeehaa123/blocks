IconGroup can explicity declare icons

```react
const handleClick = () => alert("clicked");
const Icon = IconGroup.Icon;

<IconGroup>
  <Icon name="sort" onClick={handleClick}/>
  <Icon name="twitter" onClick={handleClick}/>
  <Icon name="hamburger" onClick={handleClick}/>
</IconGroup>
```

Or it can pass the icons data as a prop

```react
const handleClick = () => alert("clicked");
const icons = [
  {name: "eye", onClick: handleClick},
  {name: "remove", onClick: handleClick},
  {name: "add", onClick: handleClick},
];

<IconGroup icons={icons}/>
```
