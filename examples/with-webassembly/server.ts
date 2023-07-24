import Nullstack, { NullstackServerContext } from 'nullstack'

import type { Request, Response } from 'express'

import Application from './src/Application'
import { readWASMFile } from './src/go/load-wasm'

const context = Nullstack.start(Application) as NullstackServerContext

context.server.get('/:id.wasm', (req: Request, res: Response) => {
  res.send(readWASMFile(`${req.params.id}.wasm`))
})

export default context
