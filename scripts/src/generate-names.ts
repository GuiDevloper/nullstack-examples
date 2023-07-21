import path from 'path'
import fs from 'fs'

export const examplesDirectory = path.join(process.cwd(), '../examples')
export const namesFilename = path.join(process.cwd(), 'names.json')

function writeNamesJSON(examples: string[]) {
  const names = examples.filter(example => example !== 'template')
  fs.writeFileSync(namesFilename, JSON.stringify(names, null, '  '))
}

export default function () {
  writeNamesJSON(fs.readdirSync(examplesDirectory))
}
