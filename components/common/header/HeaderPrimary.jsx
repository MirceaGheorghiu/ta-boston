import Link from "next/link";

export default function HeaderPrimary() {
  return (
    <>
      <nav className="nav-primary">
        <ul>
          <li>
            <Link href="/" title="Home">
              Home
            </Link>
          </li>

          <li>
            <Link href="/" title="Home">
              Home
            </Link>
          </li>

          <li>
            <Link href="/" title="Home">
              Home
            </Link>
          </li>

          <li>
            <Link href="/" title="Home">
              Home
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="nav-secondary">
        <ul>
          <li>
            <Link href="/" title="Glamour suits">
              Glamour Suits
            </Link>
          </li>

          <li>
            <Link href="/" title="Glamour suits">
              Glamour Suits
            </Link>
          </li>

          <li>
            <Link href="/" title="Glamour suits">
              Glamour Suits
            </Link>
          </li>

          <li>
            <Link href="/" title="Glamour suits">
              Glamour Suits
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
