import css from './CamperItem.module.css';
import Button from '../Button/Button';
import CamperFeature from '../CamperFeature/CamperFeature';
import { Link } from 'react-router-dom';
import CamperMainInfo from '../CamperMainInfo/CamperMainInfo';
import { useDispatch } from 'react-redux';
import { addLikedCamper, removeLikedCamper } from '../../redux/campersSlice';
import icons from '../../assets/icons.svg';

export default function CamperItem({ camper, isSelected }) {
  const dispatch = useDispatch();
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
        <CamperMainInfo camper={camper} isSelected={isSelected} />
        <p className={css['camper-item-description']}>{camper.description}</p>
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
      <svg
        width="32"
        height="32"
        className={[
          isSelected && css['heart-icon-selected'],
          css['heart-icon'],
        ].join(' ')}
        onClick={() => {
          isSelected
            ? dispatch(removeLikedCamper(camper.id))
            : dispatch(addLikedCamper(camper.id));
        }}
      >
        <use href={`${icons}#icon-heart`}></use>
      </svg>
    </>
  );
}
