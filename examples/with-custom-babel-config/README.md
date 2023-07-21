# Using a custom Babel config

This example features:

- An app using proposed [do expressions](https://babeljs.io/docs/babel-plugin-proposal-do-expressions) and [throw expressions](https://babeljs.io/docs/babel-plugin-proposal-throw-expressions).
- It uses [`nullstack-adapt-babel`](https://github.com/GuiDevloper/nullstack-adapters/tree/main/nullstack-adapt-babel) which replaces Nullstack compiler with Babel.
- It uses a [**webpack.config.js**](./webpack.config.js) file to configure the Babel compiler with proposal plugins.

## Deploy your own

Deploy it now with [Vercel](https://vercel.com) or preview on [StackBlitz](https://stackblitz.com):

[![Deploy with Vercel](https://vercel.com/button)](https://nullstack-new.vercel.app/with-custom-babel-config?vercel)
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://nullstack-new.vercel.app/with-custom-babel-config)

## How to use

Execute [`nulla create`](https://github.com/GuiDevloper/nulla) with [npm](https://docs.npmjs.com/cli/init):

```bash
npx nulla create --example with-custom-babel-config with-custom-babel-config-app
```

Then deploy it with [Vercel](https://github.com/GuiDevloper/nulla/blob/main/docs/en-US/deploy-vercel.md), [Heroku](https://github.com/GuiDevloper/nulla/blob/main/docs/en-US/deploy-heroku.md) or [Netlify](https://github.com/GuiDevloper/nulla/blob/main/docs/en-US/deploy-netlify.md).