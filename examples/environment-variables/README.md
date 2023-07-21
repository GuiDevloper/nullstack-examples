# Environment Variables Example

This example shows how to use environment variables with Nullstack.

Start by renaming the **[.env.example](./.env.example)** file to **.env** (recommended to be kept in [**.gitignore**](./.gitignore)).

Then take a look at it's contents and comments describing what every key become after Nullstack consumes it.

> 💡 By default Nullstack consumes the **.env** file with exception of when a `-n`/`--name` flag is passed, e.g. `nullstack start --name=test`, in this case it searches for a **.env.test**

[Application](./src/Application.tsx) component is the main code and logs values only available at server brought from **.env**: `NULLSTACK_SERVER_PORT` and `COMMON_VARIABLE`.

[KeysTable](./src/KeysTable.tsx) is a [stateless component](https://nullstack.app/stateless-components) that just illustrates how all keys from **.env** are or not available to the browser.

[AccessCount](./src/AccessCount.tsx) component brings a more functional use of **.env** keys featuring a counter to API ([server functions](https://nullstack.app/server-functions)) access.

- The API is only accessed passing the right password as stored at **.env**'s `NULLSTACK_SECRETS_PASSWORD`.
- It was written as when running the app with the `test` script (e.g. `npm run test`) `--name=test` will be passed, making Nullstack use the **.env.test** which sets `NULLSTACK_SETTINGS_DISABLE_COUNT` (`settings.disableCount`) used to fully disable API access and count at all.

> 💡🏷️ [**src/environment.d.ts**](./src/environment.d.ts) declares types for **.env** keys adding autocomplete for them at both `process.env` and context keys `settings`/`server`

## Deploy your own

Deploy it now with [Vercel](https://vercel.com) or preview on [StackBlitz](https://stackblitz.com):

[![Deploy with Vercel](https://vercel.com/button)](https://nullstack-new.vercel.app/environment-variables?vercel)
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://nullstack-new.vercel.app/environment-variables)

## How to use

Execute [`nulla create`](https://github.com/GuiDevloper/nulla) with [npm](https://docs.npmjs.com/cli/init):

```bash
npx nulla create --example environment-variables environment-variables-app
```

Then deploy it with [Vercel](https://github.com/GuiDevloper/nulla/blob/main/docs/en-US/deploy-vercel.md), [Heroku](https://github.com/GuiDevloper/nulla/blob/main/docs/en-US/deploy-heroku.md) or [Netlify](https://github.com/GuiDevloper/nulla/blob/main/docs/en-US/deploy-netlify.md).