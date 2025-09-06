import css from './CamperForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '../Button/Button';
import icons from '../../assets/icons.svg';
import FieldSelector from '../FieldSelector/FieldSelector';

const CamperSchema = Yup.object().shape({
  location: Yup.string()
    .min(3, 'Location has to be at least 3 characters long!')
    .max(100, 'Name has to be maximum 100 characters long!')
    .required('Location is required'),
  equipment: Yup.array().of(
    Yup.string().oneOf(['AC', 'kitchen', 'TV', 'bathroom', 'transmission'])
  ),
  type: Yup.string().oneOf(['panelTruck', 'fullyIntegrated', 'alcove']),
});

export default function CamperForm() {
  const fieldId = useId();

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        location: ''
      }}
      validationSchema={CamperSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={css['form']}>
          <legend className={css['main-legend']}>Location</legend>
          <fieldset className={css['fieldset']}>
            <div className={css['location-wrapper']}>
              <Field
                type="text"
                name="location"
                id={`${fieldId}-location`}
                className={css['input']}
              />
              <svg width="20" height="20" className={css['map-icon']}>
                <use href={`${icons}#icon-map`}></use>
              </svg>
            </div>
            <ErrorMessage name="location" component="span" />
          </fieldset>

          <legend className={css['main-legend']}>Filters</legend>

          <div className={css['filters-wrapper']}>
            <fieldset
              className={[css['filter-fieldset'], css['fieldset']].join(' ')}
            >
              <legend className={css['legend']}>Vehicle equipment</legend>
              <hr className={css['divider']} />
              <div className={css['field-selector-wrapper']}>
                <FieldSelector
                  type="checkbox"
                  name="equipment"
                  value="AC"
                  displayValue="AC"
                  iconId="icon-ac"
                ></FieldSelector>
                <FieldSelector
                  type="checkbox"
                  name="equipment"
                  value="transmission"
                  displayValue="Automatic"
                  iconId="icon-automatic"
                ></FieldSelector>
                <FieldSelector
                  type="checkbox"
                  name="equipment"
                  value="kitchen"
                  displayValue="Kitchen"
                  iconId="icon-kitchen"
                ></FieldSelector>
                <FieldSelector
                  type="checkbox"
                  name="equipment"
                  value="TV"
                  displayValue="TV"
                  iconId="icon-tv"
                ></FieldSelector>
                <FieldSelector
                  type="checkbox"
                  name="equipment"
                  value="bathroom"
                  displayValue="Bathroom"
                  iconId="icon-shower"
                ></FieldSelector>
              </div>
              <ErrorMessage
                name="equipment"
                component="span"
                className={css['error']}
              />
            </fieldset>

            <fieldset
              className={[css['filter-fieldset'], css['fieldset']].join(' ')}
            >
              <legend className={css['legend']}>Vehicle type</legend>
              <hr className={css['divider']} />
              <div className={css['field-selector-wrapper']}>
                <FieldSelector
                  type="radio"
                  name="type"
                  value="panelTruck"
                  displayValue="Van"
                  iconId="icon-van"
                ></FieldSelector>
                <FieldSelector
                  type="radio"
                  name="type"
                  value="fullyIntegrated"
                  displayValue="Fully integrated"
                  iconId="icon-integrated"
                ></FieldSelector>
                <FieldSelector
                  type="radio"
                  name="type"
                  value="alcove"
                  displayValue="Alcove"
                  iconId="icon-alcove"
                ></FieldSelector>
              </div>
              <ErrorMessage
                name="type"
                component="span"
                className={css['error']}
              />
            </fieldset>
          </div>

          <Button text="Search" type="submit"></Button>
        </Form>
      )}
    </Formik>
  );
}
