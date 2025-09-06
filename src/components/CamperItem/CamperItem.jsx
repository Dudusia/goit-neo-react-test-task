import css from './CamperItem.module.css';
import icons from '../../assets/icons.svg';
import Button from '../Button/Button';
import CamperFeature from '../CamperFeature/CamperFeature';
import { Link } from 'react-router-dom';

export default function CamperItem({ camper }) {
  return (
    <>
      {/* TODO: maybe could be taken out into a separate component */}
      <img
        className={css['camper-item-image']}
        src={camper.gallery[0].original}
        alt={camper.name}
        width="292px"
        height="320px"
      />
      <div className={css['camper-item-info']}>
        <div className={css['camper-header-liked-wrapper']}>
          <h2 className="camper-item-header">
            <div className={css['camper-header-wrapper']}>
              <span className={css['camper-name']}>{camper.name}</span>
              {/* TODO: make a separate component */}
              <span className={css['camper-name']}>
                &euro;{Number(camper.price).toFixed(2)}
              </span>
            </div>
          </h2>
          <svg width="26" height="24" className={css['heart-icon']}>
            <use href={`${icons}#icon-heart`}></use>
          </svg>
        </div>
        {/* TODO: make it into a separate component */}
        <div className={css['camper-item-additional-info']}>
          <div className={css['reviews-location-wrapper']}>
            <svg width="16" height="16" className={css['star-icon']}>
              <use href={`${icons}#icon-star`}></use>
            </svg>
            <p className={css['review-location-info']}>
              {camper.rating} ({camper.reviews.length} Reviews)
            </p>
          </div>
          <div className={css['reviews-location-wrapper']}>
            <svg width="16" height="16" className={css['map-icon']}>
              <use href={`${icons}#icon-map`}></use>
            </svg>
            <p className={css['review-location-info']}>{camper.location}</p>
          </div>
        </div>
        <p className={css['camper-item-description']}>{camper.description}</p>
        {/* TODO: should be made into separate component? */}
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
        </ol>
        <Link to={`/catalog/${camper.id}`}>
          <Button
            text="Show more"
            type="button"
            additionalClass={css['show-more-button']}
          ></Button>
        </Link>
      </div>
    </>
  );
}
