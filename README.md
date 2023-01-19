
# SWAG LABS - E2E Tests

Project base on Cypress and Typescript, tests can be launched locally and in pipeline (github actions)

The most common selectors/views are saved as page models

Similarly, the most common actions are implented as Cypress Commands

## Stack
- cypress
- typescript
- faker
- eslint
- husky
- prettier
 
## Local configuration
To run tests locally are necessary [Node + NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

After pulling repo run command `npm install`

**Envs:**

_SWAG_USERNAME_ - username

_SWAG_PASSWORD_ - username

Can be passed as OS envs or via `cypress.env.json` file

Example structure of `cypress.env.json`
```
{ "username": "john1", "password": "$tr0nk" }
```

Run tests with runner: `npx cypress open`

Run tests in headless mode: `npx cypress run`

## CI/CD

There is prepared configuration for github actions pipeline 

Tests are launched on Chrome in headless mode

Credentials are passed via secrets

After tests run artifacts are saved (video - allways, screenshot - on failure)

## Development

In project are configured linters, formatters (eslint, prettier, husky - pre-commit)

There is also configuration for VSCode IDE



