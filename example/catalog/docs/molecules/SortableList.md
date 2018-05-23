Sortable Lists can be vertical

```react
state: {items: ["Aaa aaaa", "Bbb bbbb", "Ccc ccccc"]}
---
const Item = SortableList.Item;
const move = SortableList.move;

const onSort = ({oldIndex, newIndex}) => {
  setState({
    items: move(state.items, oldIndex, newIndex),
  });
};

<SortableList onSort={onSort}>
  {state.items.map((val,index ) => {
    return <Item key={`item-${index}`}>{val}</Item>
  })}
</SortableList>
```

or they can be horizontal

```react
state: {items: ["Aaa aaaa", "Bbb bbbb", "Ccc ccccc"]}
---
const Item = SortableList.Item;
const move = SortableList.move;

const onSort = ({oldIndex, newIndex}) => {
  setState({
    items: move(state.items, oldIndex, newIndex),
  });
};

<SortableList direction="horizontal" onSort={onSort}>
  {state.items.map((val,index ) => {
    return <Item key={`item-${index}`}>{val}</Item>
  })}
</SortableList>
```
