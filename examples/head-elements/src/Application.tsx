import './Application.css'
import Nullstack, { NullstackClientContext } from 'nullstack'

class Application extends Nullstack {

  prepare({ page }: NullstackClientContext) {
    page.title = 'This page has a title 🧐'
  }

  render() {
    return (
      <main>
        <head>
          <meta name="twitter:card" content="summary_large_image" />
          <link href="https://fonts.gstatic.com" rel="preconnect" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          />
        </head>

        <h1>This page has a title 🧐</h1>
      </main>
    )
  }

}

export default Application
