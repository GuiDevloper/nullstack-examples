import type { NullstackClientContext } from 'nullstack';

function Home({ router }: NullstackClientContext) {
  const cleanRoute = router.path.replace('/', '');
  return <p>Hello, I'm the {cleanRoute} page</p>
}

export default Home;