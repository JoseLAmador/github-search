import { useRouter } from "next/router";
import Link from "next/link";
import { HOME_LINKS } from "@/utils/contants";

const linkCls = "inline-block py-2 px-2";
const liCls = "hover:bg-primary-400 rounded";
const activeCls = "bg-primary-400 rounded";

function Header() {
  const { asPath } = useRouter();

  return (
    <header className="py-5 bg-primary">
      <nav className="px-4 xl:px-0 mx-auto max-w-screen-xl text-white" aria-label="Top">
        <ul className="flex items-center justify-end space-x-6">
          <li className={asPath === "/" ? activeCls : liCls }>
            <Link href="/">
              <a className={linkCls}>Inicio</a>
            </Link>
          </li>
          { HOME_LINKS?.map((item) => (
            <li key={item?.label} className={asPath === item?.to ? activeCls : liCls }>
              <Link href={item?.to}>
                <a className={linkCls}>Search {item?.slug}</a>
              </Link>
            </li>
          )) }
        </ul>
      </nav>
    </header>
  );
}

export default Header;
