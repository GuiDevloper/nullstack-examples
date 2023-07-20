import Nullstack, { NullstackClientContext, NullstackNode } from 'nullstack'

import Logo from 'nullstack/logo'

type HomeProps = {
  greeting: string
}

type HomeLinkProps = {
  href: string
}

declare function Link(props: HomeLinkProps): NullstackNode

class Home extends Nullstack<HomeProps> {

  renderLink({ children, href }: NullstackClientContext<HomeProps & HomeLinkProps>) {
    const link = `${href}?ref=create-nullstack-app`
    return (
      <a
        class="inline-block text-pink-500 ml-1 my-1"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

  render({ greeting }: NullstackClientContext<HomeProps>) {
    return (
      <section class="w-full max-w-3xl min-h-screen my-0 mx-auto flex items-center p-6 flex-wrap md:flex-nowrap">
        <article class="w-full mb-5">
          <Link href="https://nullstack.app/pt-br">
            <div class="ml-1">
              <Logo height={60} light />
            </div>
          </Link>
          <h1 class="block font-crete-round font-bold text-xl my-4">
            {greeting}
          </h1>
          <p class="block">
            Fizemos alguns exemplos para te ajudar a começar! Dê uma olhada na
            <Link href="vscode://file/C:/projects/nullstack-examples/examples/with-tail/src">
              pasta src
            </Link>
            .
          </p>
          <ul class="block leading-snug mt-4">
            <li>
              <Link href="https://nullstack.app/pt-br/componentes-renderizaveis">
                🎉 Crie seu primeiro componente
              </Link>
            </li>
            <li>
              <Link href="https://nullstack.app/pt-br/rotas-e-parametros">
                ✨ Configure sua primeira rota
              </Link>
            </li>
            <li>
              <Link href="https://nullstack.app/pt-br/contexto">
                ⚡ Defina seu context
              </Link>
            </li>
            <li>
              <Link href="https://github.com/nullstack/nullstack/stargazers">
                ⭐ Dê uma estrela no github
              </Link>
            </li>
            <li>
              <Link href="https://youtube.com/nullstack">
                🎬 Se inscreva no nosso Canal do Youtube
              </Link>
            </li>
          </ul>
          <span class="block mt-2">
            Dica: nós temos uma
            <Link href="vscode:extension/ChristianMortaro.vscode-nullstack">
              Extensão para VS Code
            </Link>
          </span>
        </article>
        <aside class="w-full">
          <Link href="https://nullstack.app/pt-br/waifu">
            <img
              class="w-full inline-block"
              src="/nulla-chan.webp"
              alt="Nulla-Chan: waifu oficial do Nullstack"
            />
          </Link>
        </aside>
      </section>
    )
  }

}

export default Home
