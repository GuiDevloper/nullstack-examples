import { NullstackClientContext, NullstackFunctionalComponent } from 'nullstack'

function Dynamic({ router }: NullstackClientContext) {
  const cleanRoute = router.path.replace('/', '')
  return <p>Hello, I'm the {cleanRoute} page</p>
}

export default Dynamic as NullstackFunctionalComponent<Record<string, any>>
