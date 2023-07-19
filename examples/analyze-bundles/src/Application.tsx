import './Application.css'
import Nullstack from 'nullstack'

import { faker } from '@faker-js/faker'

import About from './About'

// The name will be generated at build time only
const name = faker.person.fullName()

class Application extends Nullstack {

  render() {
    return (
      <main>
        <div route="/">
          <h1>Home Page</h1>
          <p>Welcome, {name}</p>
          <div>
            <a href="/about">About Page</a>
          </div>
        </div>
        <About route="/about" />
      </main>
    )
  }

}

export default Application
