import { NullstackClientContext, NullstackFunctionalComponent } from 'nullstack'

type ActiveLinkProps = JSX.AllElements['a'] & {
  href: string
}

function ActiveLink({
  href,
  children,
  router,
  class: currentClasses,
  ...otherAttributes
}: NullstackClientContext<ActiveLinkProps>) {
  const activeClass = router.path === href ? ' active' : ''
  const classes = `${currentClasses}${activeClass}`
  return (
    <a href={href} class={classes} {...otherAttributes}>
      {children}
    </a>
  )
}

export default ActiveLink as NullstackFunctionalComponent<ActiveLinkProps>
