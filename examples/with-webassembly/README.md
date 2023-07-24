# WebAssembly example

This example shows how to import WebAssembly files (`.wasm`) and use them inside of a Nullstack component in both server and client environments. In the case of this example we're showing [Rust](https://rust-lang.org/) and [Go](https://go.dev/) compiled to WebAssembly.

## Deploy your own

Deploy it now with [Vercel](https://vercel.com) or preview on [StackBlitz](https://stackblitz.com):

[![Deploy with Vercel](https://vercel.com/button)](https://nullstack-new.vercel.app/with-webassembly?vercel)
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://nullstack-new.vercel.app/with-webassembly)

## How to use

Execute [`nulla create`](https://github.com/GuiDevloper/nulla) with [npm](https://docs.npmjs.com/cli/init):

```bash
npx nulla create --example with-webassembly with-webassembly-app
```

Then deploy it with [Vercel](https://github.com/GuiDevloper/nulla/blob/main/docs/en-US/deploy-vercel.md), [Heroku](https://github.com/GuiDevloper/nulla/blob/main/docs/en-US/deploy-heroku.md) or [Netlify](https://github.com/GuiDevloper/nulla/blob/main/docs/en-US/deploy-netlify.md).

## Compiling to WASM

### Rust

The WASM file is included in the example, but to compile your own Rust code you'll have to [install](https://www.rust-lang.org/learn/get-started) Rust.

To compile `src/rust/src/main.rs` to `src/rust/main.wasm` run:

```bash
npm run build:rust
# or
yarn build:rust
# or
pnpm build:rust
```

### Go

The WASM file is included in the example, but to compile your own Go code you'll have to install both [Go](https://go.dev/doc/install) and [TinyGo](https://tinygo.org/getting-started/install/) (used to generate optimized Go binaries).

To compile `src/go/src/main.rs` to `src/go/main.wasm` run:

```bash
npm run build:go
# or
yarn build:go
# or
pnpm build:go
```