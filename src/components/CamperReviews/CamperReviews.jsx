import css from './CamperReviews.module.css';
import { useSelector } from 'react-redux';
import { getSelectedCamper } from '../../redux/campersSlice';
import CamperReview from '../CamperReview/CamperReview';
import CamperBookingForm from '../CamperBookingForm/CamperBookingForm';

export default function CamperReviews() {
  const camper = useSelector(getSelectedCamper);
  return (
    <div className={css['reviews-container']}>
      {camper.reviews.length > 0 && (
        <ol className={css['reviews-list']}>
          {camper.reviews.map(review => {
            return (
              <li
                className={css['camper-review']}
                key={review.comment + review.reviewer_name}
              >
                <CamperReview review={review} />
              </li>
            );
          })}
        </ol>
      )}
      <CamperBookingForm />
    </div>
  );
}
