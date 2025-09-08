import css from './CamperForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '../Button/Button';
import icons from '../../assets/icons.svg';
import FieldSelector from '../FieldSelector/FieldSelector';
import { useDispatch } from 'react-redux';
import { resetCampersState } from '../../redux/campersSlice';
import { fetchCampers } from '../../redux/campersOps';
import { changeFilter } from '../../redux/filtersSlice';
import clsx from 'clsx';

const CamperSchema = Yup.object().shape({
  location: Yup.string()
    .min(3, 'Location has to be at least 3 characters long!')
    .max(100, 'Name has to be maximum 100 characters long!'),
  equipment: Yup.array().of(
    Yup.string().oneOf(['AC', 'kitchen', 'TV', 'bathroom', 'transmission'])
  ),
  form: Yup.string().oneOf(['panelTruck', 'fullyIntegrated', 'alcove']),
});

export default function CamperForm() {
  const fieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = values => {
    const assginedFilters = {
      ...(values.location && { location: values.location }),
      ...(values.form && { form: values.form }),
      ...(values.equipment.includes('bathroom') && { bathroom: true }),
      ...(values.equipment.includes('TV') && { TV: true }),
      ...(values.equipment.includes('transmission') && {
        transmission: 'automatic',
      }),
      ...(values.equipment.includes('AC') && { AC: true }),
      ...(values.equipment.includes('kitchen') && { kitchen: true }),
    };
    if (Object.keys(assginedFilters).length !== 0) {
      dispatch(changeFilter(assginedFilters));
      dispatch(resetCampersState());
      dispatch(fetchCampers({ filters: assginedFilters }));
    }
  };

  return (
    <Formik
      initialValues={{
        location: '',
        form: '',
        equipment: [],
      }}
      validationSchema={CamperSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={css['form']}>
          <legend className={css['main-legend']}>Location</legend>
          <fieldset className={clsx(css['location-fieldset'], css['fieldset'])}>
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
            <ErrorMessage
              className={css['error']}
              name="location"
              component="span"
            />
          </fieldset>

          <legend className={css['main-legend']}>Filters</legend>

          <div className={css['filters-wrapper']}>
            <fieldset className={clsx(css['filter-fieldset'], css['fieldset'])}>
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

            <fieldset className={clsx(css['filter-fieldset'], css['fieldset'])}>
              <legend className={css['legend']}>Vehicle type</legend>
              <hr className={css['divider']} />
              <div className={css['field-selector-wrapper']}>
                <FieldSelector
                  type="radio"
                  name="form"
                  value="panelTruck"
                  displayValue="Van"
                  iconId="icon-van"
                ></FieldSelector>
                <FieldSelector
                  type="radio"
                  name="form"
                  value="fullyIntegrated"
                  displayValue="Fully integrated"
                  iconId="icon-integrated"
                ></FieldSelector>
                <FieldSelector
                  type="radio"
                  name="form"
                  value="alcove"
                  displayValue="Alcove"
                  iconId="icon-alcove"
                ></FieldSelector>
              </div>
              <ErrorMessage
                name="form"
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
