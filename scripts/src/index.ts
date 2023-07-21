import generateNames, { namesFilename } from './generate-names'
import generateREADME from './generate-readme'

function main() {
  generateNames()
  generateREADME(require(namesFilename))
}

main()
