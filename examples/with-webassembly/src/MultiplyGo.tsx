import Nullstack from 'nullstack'

import loadWASM from './go/load-wasm'

class MultiplyGo extends Nullstack {

  messageClient: number
  messageServer: number
  amount = 12
  static serverAmount = 12

  static async multiplyWASM({ x }: { x: number }) {
    return (await loadWASM()).multiply(x, ++MultiplyGo.serverAmount)
  }

  async hydrate() {
    await this.multiplyAtServer()
    await this.multiplyAtClient()
  }

  async multiplyAtServer() {
    this.messageServer = await MultiplyGo.multiplyWASM({ x: 10 })
  }

  async multiplyAtClient() {
    this.messageClient = (await loadWASM()).multiply(10, ++this.amount)
  }

  render() {
    return (
      <div>
        <h1>Golang</h1>
        <section class="multiplier">
          <h3>Call at server</h3>
          <h2>{this.messageServer}</h2>
          <button onclick={this.multiplyAtServer}>Multiply!</button>
        </section>
        <section class="multiplier">
          <h3>Call at client</h3>
          <h2>{this.messageClient}</h2>
          <button onclick={this.multiplyAtClient}>Multiply!</button>
        </section>
      </div>
    )
  }

}

export default MultiplyGo
