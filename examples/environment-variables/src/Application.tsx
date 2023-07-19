/* eslint-disable no-console */
import './Application.css'
import Nullstack, {
  NullstackClientContext,
  NullstackServerContext,
} from 'nullstack'

import AccessCount from './AccessCount'
import KeysTable from './KeysTable'

class Application extends Nullstack {

  static async prepareServer(context?: any) {
    const { server } = context as NullstackServerContext
    console.log(`Server port set from .env: ${server.port}`)
    console.log(`process.env.COMMON_VARIABLE: ${process.env.COMMON_VARIABLE}`)
  }

  async prepare({ page, project }: NullstackClientContext) {
    page.title = project.name
    await Application.prepareServer()
  }

  render({ settings }: NullstackClientContext) {
    const headerTitle = `${
      settings.disableCount !== 'true' ? 'Enabled' : 'Disabled'
    } Count`

    return (
      <main>
        <KeysTable />
        <h2>{headerTitle}</h2>
        <AccessCount />
      </main>
    )
  }

}

export default Application
