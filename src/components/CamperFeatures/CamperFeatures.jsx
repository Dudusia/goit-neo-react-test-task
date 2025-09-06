import css from './CamperFeatures.module.css';
import CamperDetails from '../CamperDetails/CamperDetails';
import CamperBookingForm from '../CamperBookingForm/CamperBookingForm';

export default function CamperFeatures() {
  return (
    <div className={css['camper-features-container']}>
      <CamperDetails />
      <CamperBookingForm />
    </div>
  );
}
