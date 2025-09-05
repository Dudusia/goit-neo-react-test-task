import css from './CampersPage.module.css';
import CamperForm from '../../components/CamperForm/CamperForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/campersOps';
import { getCampers } from '../../redux/campersSlice';
import CamperItem from '../../components/CamperItem/CamperItem';
import Button from '../../components/Button/Button';

export default function CampersPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const visibleCampers = useSelector(getCampers);

  return (
    <div className={css['catalog-container']}>
      <CamperForm></CamperForm>
      <ul className={css['campers-list']}>
        {visibleCampers.map(camper => {
          return (
            <li key={camper.id} className={css['camper-item']}>
              <CamperItem camper={camper} />
            </li>
          );
        })}
      </ul>
      {/* <Button text="Load more" type="submit"></Button> */}
    </div>
  );
}
