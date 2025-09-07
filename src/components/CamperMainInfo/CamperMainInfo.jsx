import css from './CamperMainInfo.module.css';
import icons from '../../assets/icons.svg';

export default function CamperMainInfo({ camper, aditionalClasses = [] }) {
  return (
    <>
      <div
        className={[
          ...aditionalClasses,
          css['camper-main-info-container'],
        ].join(' ')}
      >
        <div>
          <h2 className={css['camper-title']}>{camper.name}</h2>
          <div className={css['camper-item-additional-info']}>
            <div className={css['reviews-location-wrapper']}>
              <svg
                width="16"
                height="16"
                className={[
                  css['star-icon'],
                  camper.reviews.length > 0 && css['star-icon-reviews'],
                ].join(' ')}
              >
                <use href={`${icons}#icon-star`}></use>
              </svg>
              <p className={css['review-location-info']}>
                {camper.rating} ({camper.reviews.length} Reviews)
              </p>
            </div>
            <div className={css['reviews-location-wrapper']}>
              <svg width="16" height="16">
                <use href={`${icons}#icon-map`}></use>
              </svg>
              <p className={css['review-location-info']}>{camper.location}</p>
            </div>
          </div>
        </div>
        <p className={css['camper-price']}>
          &euro;{Number(camper.price).toFixed(2)}
        </p>
      </div>
    </>
  );
}
