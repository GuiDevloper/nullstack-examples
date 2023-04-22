import Nullstack, { NullstackClientContext } from 'nullstack'

import './Application.css'
import Nav from './components/Nav'
import About from './pages/About'
import Blog from './pages/Blog'
import Dynamic from './pages/Dynamic'
import Home from './pages/Home'

class Application extends Nullstack {

  prepare({ page }: NullstackClientContext) {
    page.title = 'Nullstack active-class-name'
  }

  render() {
    return (
      <>
        <Nav />
        <Home route="/" />
        <About route="/about" />
        <Blog route="/blog" />
        <Dynamic route="/*" />
      </>
    )
  }

}

export default Application
