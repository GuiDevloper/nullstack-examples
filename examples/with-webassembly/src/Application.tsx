import './Application.css'
import Nullstack from 'nullstack'

import MultiplyGo from './MultiplyGo'
import MultiplyRust from './MultiplyRust'

class Application extends Nullstack {

  render() {
    return (
      <main>
        <MultiplyGo />
        <MultiplyRust />
      </main>
    )
  }

}

export default Application
