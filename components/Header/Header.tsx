import Link from 'next/link';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <ul className={css.navList}>
          <li>
            <Link href="/" className={css.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/notes" className={css.navLink}>
              Notes
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

