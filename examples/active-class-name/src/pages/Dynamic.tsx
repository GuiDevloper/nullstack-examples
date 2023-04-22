import { NullstackClientContext } from 'nullstack'

function Dynamic({ router }: Partial<NullstackClientContext>) {
  const cleanRoute = router.path.replace('/', '')
  return <p>Hello, I'm the {cleanRoute} page</p>
}

export default Dynamic
