import css from './CamperBookingForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '../Button/Button';
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker';

const CamperSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name has to be at least 3 characters long!')
    .max(100, 'Name has to be maximum 100 characters long!')
    .required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  date: Yup.date().required('Date is required'),
});

export default function CamperBookingForm() {
  const fieldId = useId();

  const handleSubmit = (values, formikHelpers) => {
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        date: '',
        email: '',
      }}
      validationSchema={CamperSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={css['form']}>
          <h3>Book your campervan now</h3>
          <p className={css['camper-booking-calling']}>
            Stay connected! We are always ready to help you.
          </p>
          <fieldset className={css['fieldset']}>
            <Field
              type="text"
              name="name"
              id={`${fieldId}-name`}
              placeholder="Name*"
              className={css['input']}
            />
            <ErrorMessage
              className={css['error']}
              name="name"
              component="span"
            />
            <Field
              type="text"
              name="email"
              id={`${fieldId}-email`}
              placeholder="Email*"
              className={css['input']}
            />
            <ErrorMessage
              className={css['error']}
              name="email"
              component="span"
            />
            <Field
              type="date"
              name="date"
              id={`${fieldId}-date`}
              placeholder="Booking date*"
              component={CustomDatePicker}
              inputClassName={css['input']}
            />
            <ErrorMessage
              className={css['error']}
              name="date"
              component="span"
            />
            <Field
              type="text"
              name="comment"
              component="textarea"
              id={`${fieldId}-comment`}
              placeholder="Comment"
              className={[css['comment'], css['input']].join(' ')}
            />
          </fieldset>

          <Button
            text="Send"
            type="submit"
            additionalClass={css['send-button']}
          ></Button>
        </Form>
      )}
    </Formik>
  );
}
