# cypress-default-tsconfig-issue

This repo demonstrates what issues might occur when Cypress tests and project source files are written in TypeScript and need to use different `tsconfig.json` configuration files.

## Development commands

- `npm run build` to build application's source code.
- `npm run start` to build application's source code and start development server.
- `npm run test` to start development server and execute E2E tests.

## The issue details

The codebase contains a one-page React application (created with [create-react-app](https://github.com/facebook/create-react-app)) and an E2E Cypress test suite. Transpilation of application's source files relies on `tsconfig.json` from the root folder. As per [documentation page](https://docs.cypress.io/guides/tooling/typescript-support#Install-TypeScript), transpilation of Cypress test suits _should_ rely on a `cypress/tsconfig.json` configuration file. The configurations of `tsconfig.json` and `cypress/tsconfig.json` are different and incompatible.

When executing `npm run test`, that in turn runs `cypress run`, we get the following error:

```sh
Your configFile is invalid: /cypress-default-tsconfig-issue/cypress.config.ts

It threw an error when required, check the stack trace below:

TSError: ⨯ Unable to compile TypeScript:
error TS5091: Option 'preserveConstEnums' cannot be disabled when 'isolatedModules' is enabled.
```

What happens is that `ts-node`, by default, uses the `tsconfig.json` (where `preserveConstEnums: false`) from the root of the project, not `cypress/tsconfig.json`, to transpile `cypress.config.ts`, though `tsconfig.json` was never meant to be used for such purpose.

## A possible solution

Provide a way to customize the path to `tsconfig.json` that is to be used by `ts-node` or, at least, enforce using `cypress/tsconfig.json`.

## License

MIT
