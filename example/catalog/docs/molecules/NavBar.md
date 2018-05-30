```react
const Logo = NavBar.Logo;
const MenuButton = NavBar.MenuButton;
const onClick = () => alert("click");

const links = [
  { onClick, title: "Create Course", level: 3 },
  { href: "/bla", title: "Admin", level: 1 },
  { onClick, title: "Sign Out", level: 1 },
  { href: "/bla", title: "Profile", level: 2 }
];

<NavBar>
  <Logo/>
  <Menu alignItems="flex-end" px={6} maxLevel={2} direction="horizontal" links={links} />
</NavBar>
```
