```react
state: { isOpen: false }
---
const toggle = () => setState({isOpen: !state.isOpen });
const links = [
  { onClick: toggle, title: "Create Course", level: 0 },
  { href: "/bla", title: "Admin", level: 2 },
  { href: "/bla", title: "Profile", level: 1 },
  { onClick: toggle, title: "Sign Out", level: 1 }
];

<div style={{height: "200px"}}>
<AppShell position="absolute" toggle={toggle} isSidebarOpen={state.isOpen} links={links}>
  <h1>This is where content renders</h1>
</AppShell>
</div>
```
