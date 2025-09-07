import { Link, useLocation } from 'react-router-dom';
import icons from '../../assets/icons.svg';
import css from './Navigation.module.css';

export default function Navigation() {
  const location = useLocation();

  return (
    <header>
      <div className={[css['header-container'], 'container'].join(' ')}>
        <Link to="/">
          <svg width="136" height="16" className={css['header-logo']}>
            <use href={`${icons}#icon-logo`}></use>
          </svg>
        </Link>
        <nav>
          <ul className={css['navigation-list']}>
            <li
              className={[
                location.pathname === '/' && css['navigation-list-item-accent'],
                css['navigation-list-item'],
              ].join(' ')}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={[
                location.pathname === '/catalog' &&
                  css['navigation-list-item-accent'],
                css['navigation-list-item'],
              ].join(' ')}
            >
              <Link to="/catalog">Catalog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
