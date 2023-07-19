/* eslint-disable no-console */
import Nullstack, { NullstackServerContext } from 'nullstack'

type ContextPassword = {
  passwordFromBrowser: string
}

class AccessCount extends Nullstack {

  apiResult: string
  static serverCount = 0

  static async accessAPI(context: ContextPassword) {
    const { secrets, settings, passwordFromBrowser } =
      context as NullstackServerContext<ContextPassword>
    if (settings.disableCount) {
      return 'Test Mode! ViewCount disabled!'
    }
    if (passwordFromBrowser !== secrets.password) {
      return 'Unauthorized access! Use the right password!'
    }
    return `Authorized! API Access count: ${++AccessCount.serverCount}`
  }

  async callAPI({ passwordFromBrowser }: ContextPassword) {
    this.apiResult = await AccessCount.accessAPI({ passwordFromBrowser })
  }

  render() {
    return (
      <main>
        <button class="button" onclick={this.callAPI}>
          Try access with wrong password
        </button>
        <button
          class="button"
          onclick={() =>
            this.callAPI({ passwordFromBrowser: 'right_password' })
          }
        >
          Try access with right password
        </button>
        {this.apiResult && <p>{this.apiResult}</p>}
      </main>
    )
  }

}

export default AccessCount
