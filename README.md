# jest config bug reproduction

When using `type: module` and `moduleResolution: node16`, I'm forced to use `.js` in `import defaultConfig from "./jest.config.js";`
But jest-config doesn't work, gives error:

```
Error: Jest: Failed to parse the TypeScript config file /home/maxim/jest-config-bug-repro/jest.integration.config.ts
  Error [ERR_REQUIRE_ESM]: require() of ES Module /home/maxim/jest-config-bug-repro/jest.config.js from /home/maxim/jest-config-bug-repro/jest.integration.config.ts not supported.
jest.config.js is treated as an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which declares all .js files in that package scope as ES modules.
Instead rename jest.config.js to end in .cjs, change the requiring code to use dynamic import() which is available in all CommonJS modules, or change "type": "module" to "type": "commonjs" in /home/maxim/jest-config-bug-repro/package.json to treat all .js files as CommonJS (using .mjs for all ES modules instead).

    at readConfigFileAndSetRootDir (/home/maxim/jest-config-bug-repro/node_modules/jest-config/build/readConfigFileAndSetRootDir.js:136:13)
    at async readConfig (/home/maxim/jest-config-bug-repro/node_modules/jest-config/build/index.js:208:18)
    at async readConfigs (/home/maxim/jest-config-bug-repro/node_modules/jest-config/build/index.js:404:26)
    at async runCLI (/home/maxim/jest-config-bug-repro/node_modules/@jest/core/build/cli/index.js:182:59)
    at async Object.run (/home/maxim/jest-config-bug-repro/node_modules/jest-cli/build/cli/index.js:155:37)
```

## Getting started

1. (optional) `nvm i`
2. `npm ci`
3. `tsc --noEmit` - works
4. `npm run test:unit` - works
5. `npm run test:integration` - doesn't work
