import './Application.css'
import Nullstack from 'nullstack'

import Home from './Home.mdx'

class Application extends Nullstack {

  render() {
    return (
      <main>
        <Home route="/" />
      </main>
    )
  }

}

export default Application
