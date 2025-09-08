import { Link, useLocation } from 'react-router-dom';
import icons from '../../assets/icons.svg';
import css from './Navigation.module.css';
import clsx from 'clsx';

export default function Navigation() {
  const location = useLocation();

  return (
    <header>
      <div className={clsx(css['header-container'], 'container')}>
        <Link to="/">
          <svg width="136" height="16" className={css['header-logo']}>
            <use href={`${icons}#icon-logo`}></use>
          </svg>
        </Link>
        <nav>
          <ul className={css['navigation-list']}>
            <li
              className={clsx(
                location.pathname === '/' && css['navigation-list-item-accent'],
                css['navigation-list-item']
              )}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={clsx(
                location.pathname === '/catalog' &&
                  css['navigation-list-item-accent'],
                css['navigation-list-item']
              )}
            >
              <Link to="/catalog">Catalog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
