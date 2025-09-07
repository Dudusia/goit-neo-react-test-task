import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamper } from '../../redux/campersOps';
import { getSelectedCamper } from '../../redux/campersSlice';
import { useLocation, useParams } from 'react-router-dom';
import css from './CamperDetailsPage.module.css';
import icons from '../../assets/icons.svg';
import { Link, Outlet } from 'react-router-dom';

export default function CamperDetailsPage() {
  const { camperId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCamper({ id: camperId }));
  }, [dispatch, camperId]);

  const camper = useSelector(getSelectedCamper);
  const location = useLocation();

  return (
    camper !== null && (
      <div className={css['container']}>
        <h2 className={css['camper-name']}>{camper.name}</h2>
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
        <h2 className={css['camper-price']}>
          &euro;{Number(camper.price).toFixed(2)}
        </h2>
        <ol className={css['camper-images-list']}>
          {camper.gallery.map(photo => (
            <li key={photo.original}>
              <img
                className={css['camper-image']}
                src={photo.original}
                alt={camper.name}
                width="292px"
                height="312px"
              />
            </li>
          ))}
        </ol>
        {/* TODO: this should be a generic one */}
        <p className={css['camper-description']}>{camper.description}</p>

        <div className={css['camper-info-links']}>
          <Link to="features">
            <h3
              className={[
                !location.pathname.includes('reviews') &&
                  css['camper-info-link-accent'],
                css['camper-info-link'],
              ].join(' ')}
            >
              Features
            </h3>
          </Link>
          <Link to="reviews">
            <h3
              className={[
                location.pathname.includes('reviews') &&
                  css['camper-info-link-accent'],
                css['camper-info-link'],
              ].join(' ')}
            >
              Reviews
            </h3>
          </Link>
        </div>

        <hr className={css['camper-info-divider']} />

        <Outlet />
      </div>
    )
  );
}
