import { NullstackClientContext } from 'nullstack';

interface ActiveLinkProps extends NullstackClientContext {
  href?: string,
  class?: string
}

function ActiveLink(context: ActiveLinkProps) {
  const { href, children, router } = context;
  const activeClass = router.path === href ? ' active' : '';
  const classes = `${context.class}${activeClass}`;
  return (
    <a href={href} class={classes}>
      {children}
    </a>
  )
}

export default ActiveLink;