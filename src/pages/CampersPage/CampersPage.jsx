import css from './CampersPage.module.css';
import CamperForm from '../../components/CamperForm/CamperForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/campersOps';
import {
  getCampersPage,
  getCampers,
  setPage,
  areThereMoreCampers,
  getCampersLikedItems,
} from '../../redux/campersSlice';
import CamperItem from '../../components/CamperItem/CamperItem';
import Button from '../../components/Button/Button';
import { getFilter } from '../../redux/filtersSlice';

export default function CampersPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const visibleCampers = useSelector(getCampers);
  const nextPage = useSelector(getCampersPage) + 1;
  const hasMoreCampers = useSelector(areThereMoreCampers);
  const assginedFilters = useSelector(getFilter);
  const likedItems = useSelector(getCampersLikedItems);

  const handleClick = () => {
    dispatch(fetchCampers({ page: nextPage, filters: assginedFilters }));
    dispatch(setPage(nextPage));
  };

  return (
    <div className={[css['catalog-container'], 'container'].join(' ')}>
      <CamperForm />
      <div className={css['camper-list-wrapper']}>
        <ul className={css['campers-list']}>
          {visibleCampers.map(camper => {
            return (
              <li key={camper.id} className={css['camper-item']}>
                <CamperItem
                  camper={camper}
                  isSelected={likedItems.includes(camper.id)}
                />
              </li>
            );
          })}
        </ul>
        {hasMoreCampers && (
          <Button
            text="Load more"
            type="submit"
            additionalClass={css['load-more-btn']}
            handleClick={handleClick}
          ></Button>
        )}
      </div>
    </div>
  );
}
