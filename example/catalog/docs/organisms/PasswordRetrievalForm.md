```react|span-4
const confirmMode = false;
const errors = {};
const userName = "";
const handler = () => alert("Done!");

<PasswordRetrievalForm
  confirmMode={confirmMode}
  errors={errors}
  userName={userName}
  onSubmit={handler}
  onCancel={handler}
  onRequestSignIn={handler}
/>
```

```react|span-4
const confirmMode = true;
const errors = {};
const userName = "";
const handler = () => alert("Done!");

<PasswordRetrievalForm
  confirmMode={confirmMode}
  errors={errors}
  userName={userName}
  onSubmit={handler}
  onCancel={handler}
  onRequestSignIn={handler}
/>
```
