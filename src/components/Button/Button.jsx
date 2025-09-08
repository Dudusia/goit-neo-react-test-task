import css from './Button.module.css';
import clsx from 'clsx';

export default function Button({
  text,
  type,
  handleClick = null,
  additionalClass = null,
}) {
  return (
    <button
      className={clsx(additionalClass, css['button'])}
      type={type}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
