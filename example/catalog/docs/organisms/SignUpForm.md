```react|span-4
const confirmMode = false;
const errors = {};
const userName = "";
const handler = () => alert("Done!");

<SignUpForm
  confirmMode={confirmMode}
  errors={errors}
  userName={userName}
  onSubmit={handler}
  onRequestSignIn={handler}
/>
```

```react|span-4
const confirmMode = true;
const errors = {};
const userName = "";
const handler = () => alert("Done!");

<SignUpForm
  confirmMode={confirmMode}
  errors={errors}
  userName={userName}
  onSubmit={handler}
  onRequestSignIn={handler}
/>
```
