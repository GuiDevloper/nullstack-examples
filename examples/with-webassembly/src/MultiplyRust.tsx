import Nullstack from 'nullstack'

import loadWASM from './rust/load-wasm'

class MultiplyRust extends Nullstack {

  messageClient: number
  messageServer: number
  amount = 12
  static serverAmount = 12

  static async multiplyWASM({ x }: { x: number }) {
    return (await loadWASM()).multiply(x, ++MultiplyRust.serverAmount)
  }

  async hydrate() {
    await this.multiplyAtServer()
    await this.multiplyAtClient()
  }

  async multiplyAtServer() {
    this.messageServer = await MultiplyRust.multiplyWASM({ x: 10 })
  }

  async multiplyAtClient(context?: never) {
    this.messageClient = (await loadWASM(context)).multiply(10, ++this.amount)
  }

  render() {
    return (
      <div>
        <h1>Rust</h1>
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

export default MultiplyRust
