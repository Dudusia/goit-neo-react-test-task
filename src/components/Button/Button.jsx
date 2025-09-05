import css from './Button.module.css';

export default function Button({ text, type, additionalClass="" }) {
  return (
    <button className={[additionalClass, css['button']].join(" ")} type={type}>
      {text}
    </button>
  );
}
