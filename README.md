## Issue in `remote-1` app

Steps to reproduce:

- `cd remote-1`
- `npm i`
- `npm run build`
- `npm start`

The `npm run build` is successful but `npm start` gives the following error:

```bash
chahar@Neetigyas-Laptop remote-1 % npm start

> start
> react-router-serve ./build/server/index.js

file:///Users/chahar/projects/demo/rr-vite-mf/remote-1/build/server/assets/index.cjs-qyK6uRiB.js:1
import require$$0 from '@module-federation/runtime-core';
       ^^^^^^^^^^
SyntaxError: The requested module '@module-federation/runtime-core' does not provide an export named 'default'
    at ModuleJob._instantiate (node:internal/modules/esm/module_job:181:21)
    at ModuleJob.run (node:internal/modules/esm/module_job:264:5)
    at onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:583:26)
    at run (/Users/chahar/projects/demo/rr-vite-mf/remote-1/node_modules/@react-router/serve/dist/cli.js:80:15)
chahar@Neetigyas-Laptop remote-1 %
```

If I manually go to the build file `remote-1/build/server/assets/index.cjs-qyK6uRiB.js` and update the import as `import * as require$$0 from '@module-federation/runtime-core';` from `import require$$0 from '@module-federation/runtime-core';` then it works.
