import { NavLink } from 'react-router-dom';
import icons from '../../assets/icons.svg';
import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <header>
      <div className={[css['container'], css['header-container']].join(' ')}>
        <NavLink to="/">
          <svg width="136" height="16" className={css['header-logo']}>
            <use href={`${icons}#icon-logo`}></use>
          </svg>
        </NavLink>
        <nav>
          <ul className={css['navigation-list']}>
            <li
              className={[
                css['navigation-list-item-accent'],
                css['navigation-list-item'],
              ].join(' ')}
            >
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={css['navigation-list-item']}>
              <NavLink to="/catalog">Catalog</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
