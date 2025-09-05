import css from './FieldSelector.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import icons from '../../assets/icons.svg';

export default function FieldSelector({
  type,
  name,
  value,
  displayValue,
  iconId,
}) {
  return (
    <>
      <label className={css['field-selector-option']}>
        <Field
          type={type}
          name={name}
          value={value}
          className={css['field-selector']}
        />
        <div className={css['field-selector-wrapper']}>
          <svg width="32" height="32" className={css['field-selector-icon']}>
            <use href={`${icons}#${iconId}`}></use>
          </svg>
          <p className={css['field-selector-description']}>{displayValue}</p>
        </div>
      </label>
    </>
  );
}
