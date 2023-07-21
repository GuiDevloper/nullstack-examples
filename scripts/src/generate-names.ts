import path from 'path'
import fs from 'fs'

type Example = {
  name: string
}

export const namesFilename = path.join(process.cwd(), 'names.json')
const examplesURL =
  'https://api.github.com/repos/GuiDevloper/nullstack-examples/contents/examples'

function writeNamesJSON(examples: Example[]) {
  const names = examples.map(example => example.name)
  fs.writeFileSync(namesFilename, JSON.stringify(names, null, '  '))
}

export default async function () {
  const examples: Example[] = await (await fetch(examplesURL)).json()
  writeNamesJSON(examples)
}
