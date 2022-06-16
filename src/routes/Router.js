import { Navigate, Route, Routes } from 'react-router-dom';
import AuthLayout from '../components/layouts/AuthLayout';
import MyService from '../components/layouts/profile/MyService';
import Sidebar from '../components/layouts/sidebar/Sidebar';
import DetailPage from '../pages/DetailPage';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import ServicePage from '../pages/ServicePage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="profile/" element={<Sidebar />}>
          <Route path=":id" element={<ProfilePage />} />
          <Route path=":id/services" element={<MyService />} />
          <Route path=":id/favorites" element={<ProfilePage />} />
        </Route>
        <Route path="services" element={<ServicePage />} />
        <Route path="services/:id" element={<DetailPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Router;
