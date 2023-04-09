import Link from 'next/link';

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <Link href="/" legacyBehavior>
        <a className="navbar-brand">My App</a>
      </Link>
   
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/" legacyBehavior>
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/user" legacyBehavior>
              <a className="nav-link">Users</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/comment" legacyBehavior>
              <a className="nav-link">Comment</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/albums" legacyBehavior>
              <a className="nav-link">Albums</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/todos" legacyBehavior>
              <a className="nav-link">Todos</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
