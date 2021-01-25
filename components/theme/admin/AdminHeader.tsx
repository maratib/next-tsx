import Link from 'next/link'

type AdminHeaderProps = {};

const AdminHeader = (props: AdminHeaderProps) => (
  <div>
    <header>
      <h1>ADMIN PANEL</h1>

      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
      </nav>
    </header>
  </div>
);
export default AdminHeader;