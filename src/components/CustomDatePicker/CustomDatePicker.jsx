import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './CustomDatePicker.module.css';
import icons from '../../assets/icons.svg';
import clsx from 'clsx';

const CustomDatePicker = ({ field, form, ...props }) => {
  return (
    <DatePicker
      selected={field.value}
      onChange={date => form.setFieldValue(field.name, date)}
      dateFormat="dd/MM/yyyy"
      minDate={new Date()}
      placeholderText="Booking date*"
      className={clsx(props.inputClassName, css['input'])}
      calendarClassName={css['date-picker-calendar']}
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className={css['calendar-header']}>
          <button
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
            className={css['nav-button']}
          >
            <svg width="9" height="16">
              <use href={`${icons}#icon-arrow-back`}></use>
            </svg>
          </button>
          <div className={css['month-year']}>
            {date.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </div>
          <button
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
            className={css['nav-button']}
          >
            <svg width="9" height="16">
              <use href={`${icons}#icon-arrow-forth`}></use>
            </svg>
          </button>
        </div>
      )}
    />
  );
};

export default CustomDatePicker;
