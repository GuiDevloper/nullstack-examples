import './Application.css'
import Nullstack from 'nullstack'

function errParam(param = throw new Error("param required at test()!")) {
  const test = param === true || throw new Error("Falsy!");
}

class Application extends Nullstack {
  randomNumber = null

  recalculate() {
    this.randomNumber = Math.ceil(Math.random() * 100)
  }

  hydrate() {
    this.recalculate()
    errParam()
  }

  render() {
    const message = do {
      if (this.randomNumber < 30) {
        'Do not give up. Try again.'
      } else if (this.randomNumber < 60) {
        'You are a lucky guy'
      } else {
        'You are soooo lucky!'
      }
    }

    if (this.randomNumber === null) return <p>Please wait..</p>
    return (
      <div>
        <h3>Your Lucky number is: "{this.randomNumber}"</h3>
        <p>{message}</p>
        <button onclick={() => this.recalculate()}>Try Again</button>
      </div>
    )
  }
}

export default Application
