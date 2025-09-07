import css from './Button.module.css';
import clsx from 'clsx';

export default function Button({
  text,
  type,
  handleClick = null,
  additionalClass = '',
}) {
  return (
    <button
      className={clsx(css['button'], additionalClass)}
      type={type}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
