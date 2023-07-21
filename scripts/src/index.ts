import generateNames, { namesFilename } from './generate-names'
import generateREADME from './generate-readme'

async function main() {
  await generateNames()
  generateREADME(require(namesFilename))
}

main()
