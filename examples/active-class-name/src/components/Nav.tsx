import './Nav.css';
import ActiveLink from './ActiveLink';

function Nav() {
  return (
    <nav>
      <ul class="nav">
        <li>
          <ActiveLink href="/" class="nav-link">Home</ActiveLink>
        </li>
        <li>
          <ActiveLink href="/about" class="nav-link">About</ActiveLink>
        </li>
        <li>
          <ActiveLink href="/blog" class="nav-link">Blog</ActiveLink>
        </li>
        <li>
          <ActiveLink href="/dynamic-route" class="nav-link">
            Dynamic Route
          </ActiveLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
