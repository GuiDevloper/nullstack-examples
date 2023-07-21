import path from 'path'
import fs from 'fs'

const readmePath = path.join(process.cwd(), '..', 'README.md')
const source = `# Nullstack Examples

Some examples in Nullstack full-stack framework 🗃️ 💖 🚀

| Example | Vercel | Online Preview |
|---------|--------|----------------|
`

const getTableLine = (example: string) =>
  `|[${example}](./examples/${example})|[![Deploy with Vercel](https://vercel.com/button)](https://nullstack-new.vercel.app/${example}?vercel)|[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://nullstack-new.vercel.app/${example})|`

export default function (names: string[]) {
  const README = `${source}${names.map(name => getTableLine(name)).join('\n')}`
  fs.writeFileSync(readmePath, README)
}
