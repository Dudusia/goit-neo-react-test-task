import css from './CamperReview.module.css';
import icons from '../../assets/icons.svg';
import clsx from 'clsx';

export default function CamperReview({ review }) {
  return (
    <>
      <div className={css['reviewer-info']}>
        <div className={css['avatar']}>{review.reviewer_name[0]}</div>
        <div>
          <p className={css['reviewer-name']}>{review.reviewer_name}</p>
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              width="16"
              height="16"
              className={clsx(
                i <= review.reviewer_rating && css['star-icon-reviews'],
                css['star-icon'],
              )}
            >
              <use href={`${icons}#icon-star`}></use>
            </svg>
          ))}
        </div>
      </div>
      <p className={css['reviewer-comment']}>{review.comment}</p>
    </>
  );
}
