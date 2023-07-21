import generateNames, { namesFilename } from './generate-names'

async function main() {
  await generateNames()
  const names = require(namesFilename)
  console.log(names)
}

main()
