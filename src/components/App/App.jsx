import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navigation from '../Navigation/Navigation';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CampersPage = lazy(() => import('../../pages/CampersPage/CampersPage'));
const CamperDetailsPage = lazy(() => import('../../pages/CamperDetailsPage/CamperDetailsPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CampersPage />} />
          <Route path="/catalog/:camperId" element={<CamperDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
