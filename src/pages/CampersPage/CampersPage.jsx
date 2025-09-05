import css from './CampersPage.module.css';
import CamperForm from '../../components/CamperForm/CamperForm';

export default function CampersPage() {
  return (
    <div className={css['catalog-container']}>
      <CamperForm></CamperForm>
    </div>
  );
}
