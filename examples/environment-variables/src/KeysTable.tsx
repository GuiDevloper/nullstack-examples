import './KeysTable.css'
import {
  NullstackClientContext,
  NullstackFunctionalComponent,
  NullstackServerContext,
} from 'nullstack'

// Wrongly enforcing type to example values always undefined at browser
type FakeServer = NullstackServerContext

function KeysTable({
  project,
  settings,
  secrets,
  server,
}: NullstackClientContext<FakeServer>) {
  return (
    <table class="table">
      <thead>
        <tr>
          <th>Variable Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>NULLSTACK_PROJECT_NAME</td>
          <td>{project.name}</td>
        </tr>
        <tr>
          <td>NULLSTACK_SETTINGS_PUBLIC_KEY</td>
          <td>{settings?.publicKey}</td>
        </tr>
        <tr>
          <td>NULLSTACK_SERVER_PORT</td>
          <td>{server?.port || 'undefined in browser :)'}</td>
        </tr>
        <tr>
          <td>NULLSTACK_SECRETS_PASSWORD</td>
          <td>{secrets?.password || 'undefined in browser :)'}</td>
        </tr>
        <tr>
          <td>COMMON_VARIABLE</td>
          <td>
            <code>process.env.COMMON_VARIABLE</code> can be accessed only at
            server!
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default KeysTable as NullstackFunctionalComponent<any>
