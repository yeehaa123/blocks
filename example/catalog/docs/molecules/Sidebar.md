```react
state: { isOpen: false }
---
const toggle = () => setState({isOpen: !state.isOpen });
const close = () => setState({isOpen: false });

const MenuButton = Sidebar.MenuButton;
const CloseButton = Sidebar.CloseButton;

const content = <div style={{padding: "20px"}}>
  <p>Sidebar</p>
  <CloseButton onClick={close}/>
</div>;

<div style={{height: "200px"}}>
  <Sidebar content={content} toggle={toggle} isOpen={state.isOpen}>
    <div style={{padding: "1rem"}}>
      <MenuButton onClick={toggle}/>
    </div>
  </Sidebar>
</div>
```
