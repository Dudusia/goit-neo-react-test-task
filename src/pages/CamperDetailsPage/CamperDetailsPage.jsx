import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamper } from '../../redux/campersOps';
import { useLocation, useParams } from 'react-router-dom';
import css from './CamperDetailsPage.module.css';
import { Link, Outlet } from 'react-router-dom';
import CamperMainInfo from '../../components/CamperMainInfo/CamperMainInfo';
import clsx from 'clsx';
import { getSelectedCamper } from '../../redux/camperSlice';
export default function CamperDetailsPage() {
  const { camperId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (camperId) {
      dispatch(fetchCamper({ id: camperId }));
    }
  }, [dispatch, camperId]);

  const camper = useSelector(getSelectedCamper);
  const location = useLocation();

  return (
    camper !== null && (
      <div className={clsx('container', css['camper-page-container'])}>
        <div className={css['camper-details-wrapper']}>
          <CamperMainInfo
            camper={camper}
            aditionalClasses={[css['camper-main-info']]}
          />
          <ol className={css['camper-images-list']}>
            {camper.gallery.map(photo => (
              <li key={photo.original}>
                <img
                  className={css['camper-image']}
                  src={photo.original}
                  alt={camper.name}
                />
              </li>
            ))}
          </ol>
          <p className={css['camper-description']}>{camper.description}</p>
        </div>

        <div className={css['camper-info-links']}>
          <Link to="features">
            <h3
              className={clsx(
                !location.pathname.includes('reviews') &&
                  css['camper-info-link-accent'],
                css['camper-info-link']
              )}
            >
              Features
            </h3>
          </Link>
          <Link to="reviews">
            <h3
              className={
                location.pathname.includes('reviews')
                  ? css['camper-info-link-accent']
                  : undefined
              }
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
