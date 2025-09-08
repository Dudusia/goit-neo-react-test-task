import css from './HomePage.module.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import clsx from 'clsx';

export default function HomePage() {
  return (
    <div className={clsx(css['homepage-container'], 'container')}>
      <h1 className={css['homepage-title']}>Campers of your dreams</h1>
      <h2 className={css['homepage-call-to-action']}>
        You can find everything you want in our catalog
      </h2>
      <Link to="/catalog">
        <Button text="View Now" type="button"></Button>
      </Link>
    </div>
  );
}
