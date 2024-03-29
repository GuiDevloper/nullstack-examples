# Analyzer Bundles example

This example shows how to analyze the output bundles using [webpack-bundle-analyzer](https://npmjs.com/package/webpack-bundle-analyzer)

## Analyze webpack output

To analyze your webpack output, invoke the following command:

```bash
npm run analyze
```

It will build the app, generate JSON stats files for both server and client bundles and then open them in the browser at `localhost` ports `8880` and `8881` respectively.

> Don't forget to select `Show content of concatenated modules` option on the sidebar and `Stat` is the most complete Treemap size

## Deploy your own

Deploy it now with [Vercel](https://vercel.com) or preview on [StackBlitz](https://stackblitz.com):

[![Deploy with Vercel](https://vercel.com/button)](https://nullstack-new.vercel.app/analyze-bundles?vercel)
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://nullstack-new.vercel.app/analyze-bundles)

## How to use

Execute [`nulla create`](https://github.com/GuiDevloper/nulla) with [npm](https://docs.npmjs.com/cli/init):

```bash
npx nulla create --example analyze-bundles analyze-bundles-app
```

Then deploy it with [Vercel](https://github.com/GuiDevloper/nulla/blob/main/docs/en-US/deploy-vercel.md), [Heroku](https://github.com/GuiDevloper/nulla/blob/main/docs/en-US/deploy-heroku.md) or [Netlify](https://github.com/GuiDevloper/nulla/blob/main/docs/en-US/deploy-netlify.md).
