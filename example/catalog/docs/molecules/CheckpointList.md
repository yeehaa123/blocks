```react
const checkpoints = [{
  checkpointId: "abc",
  completed: true,
  task: "do this",
  resourceUrl: "#/molecules/List"
},{
  checkpointId: "def",
  completed: true,
  task: "do this",
  resourceUrl: "#/molecules/List"
},{
  checkpointId: "ghi",
  completed: true,
  task: "do this",
  resourceUrl: "#/molecules/List"
}];
<CheckpointList checkpoints={checkpoints}/>
```

```react
const checkpoints = [{
  checkpointId: "abc",
  completed: true,
  task: "do this",
  resourceUrl: "#/molecules/List"
},{
  checkpointId: "def",
  completed: true,
  task: "do this",
  resourceUrl: "#/molecules/List"
},{
  checkpointId: "ghi",
  completed: true,
  task: "do this",
  resourceUrl: "#/molecules/List"
}];

<CheckpointList trackable checkpoints={checkpoints}/>
```
