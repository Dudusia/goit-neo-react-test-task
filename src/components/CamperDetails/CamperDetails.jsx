import { useSelector } from 'react-redux';
import css from './CamperDetails.module.css';
import { getSelectedCamper } from '../../redux/campersSlice';
import CamperFeature from '../CamperFeature/CamperFeature';

// "engine": "diesel"

export default function CamperDetails() {
  const camper = useSelector(getSelectedCamper);
  return (
    <div className={css['camper-features-wrapper']}>
      <ol className={css['camper-item-features']}>
        {camper.transmission === 'automatic' && (
          <li className={css['camper-item-feature']}>
            <CamperFeature iconId="icon-automatic" displayValue="Automatic" />
          </li>
        )}
        {camper.AC && (
          <li className={css['camper-item-feature']}>
            <CamperFeature iconId="icon-ac" displayValue="AC" />
          </li>
        )}
        {camper.bathroom && (
          <li className={css['camper-item-feature']}>
            <CamperFeature iconId="icon-shower" displayValue="Bathroom" />
          </li>
        )}
        {camper.kitchen && (
          <li className={css['camper-item-feature']}>
            <CamperFeature iconId="icon-kitchen" displayValue="Kitchen" />
          </li>
        )}
        {camper.TV && (
          <li className={css['camper-item-feature']}>
            <CamperFeature iconId="icon-tv" displayValue="TV" />
          </li>
        )}
        {camper.microwave && (
          <li className={css['camper-item-feature']}>
            <CamperFeature iconId="icon-microwave" displayValue="Microwave" />
          </li>
        )}
        {camper.refrigerator && (
          <li className={css['camper-item-feature']}>
            <CamperFeature
              iconId="icon-refrigerator"
              displayValue="Refrigerator"
            />
          </li>
        )}
        {camper.radio && (
          <li className={css['camper-item-feature']}>
            <CamperFeature iconId="icon-radio" displayValue="Radio" />
          </li>
        )}
        {camper.water && (
          <li className={css['camper-item-feature']}>
            <CamperFeature iconId="icon-water" displayValue="Water" />
          </li>
        )}
        {camper.gas && (
          <li className={css['camper-item-feature']}>
            <CamperFeature iconId="icon-gas" displayValue="Gas" />
          </li>
        )}
        {camper.engine === 'petrol' && (
          <li className={css['camper-item-feature']}>
            <CamperFeature iconId="icon-petrol" displayValue="Petrol" />
          </li>
        )}
      </ol>
      <div>
        <h3 className="camper-section-title">Vehicle details</h3>
        <hr className={css['divider']} />
        <table className={css['properties-table']}>
          <tbody>
            <tr>
              <td>Form</td>
              <td>{camper.form}</td>
            </tr>
            <tr>
              <td>Length</td>
              <td>{camper.length}</td>
            </tr>
            <tr>
              <td>Width</td>
              <td>{camper.width}</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>{camper.height}</td>
            </tr>
            <tr>
              <td>Tank</td>
              <td>{camper.tank}</td>
            </tr>
            <tr>
              <td>Consumption</td>
              <td>{camper.consumption}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
