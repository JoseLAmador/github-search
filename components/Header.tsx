import Link from "next/link";

const linkCls = "inline-block py-2 px-2";
const liCls = "hover:bg-primary-400 rounded";

function Header() {
  return (
    <header className="py-5 bg-primary">
      <nav className="px-4 xl:px-0 mx-auto max-w-screen-xl text-white" aria-label="Top">
        <ul className="flex items-center justify-end space-x-6">
          <li className={liCls}>
            <Link href="/">
              <a className={linkCls}>Inicio</a>
            </Link>
          </li>
          <li className={liCls}>
            <Link href="/search-user">
              <a className={linkCls}>Search user</a>
            </Link>
          </li>
          <li className={liCls}>
            <Link href="/search-repo">
              <a className={linkCls}>Search repository</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
