import Link from 'next/link'
import NavBar from './NavBar';
type HeaderProps = {};

const Header = (props: HeaderProps) => (
  <div>
    <header>
      <NavBar />
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/admin">
          <a>Admin 12</a>
        </Link>{' '}
        |
      </nav>
    </header>
  </div>
);
export default Header;