import css from './Loader.module.css';
import { ClipLoader } from 'react-spinners';

const Loader = () => (
  <div className={css.loaderContainer}>
    <ClipLoader color={"#D84343"} size={50} speedMultiplier={1} />
  </div>
);

export default Loader;
