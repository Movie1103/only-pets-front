import { Navigate, Route, Routes } from 'react-router-dom';
import AuthLayout from '../components/layouts/AuthLayout';
import Me from '../components/layouts/profile/Me';
import MyService from '../components/layouts/profile/MyService';
import Sidebar from '../components/layouts/sidebar/Sidebar';
import { useAuth } from '../contexts/AuthContext';
import DetailPage from '../pages/DetailPage';
import HomePage from '../pages/HomePage';
import ServicePage from '../pages/ServicePage';

function Router() {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="" element={<HomePage />} />
        {user && (
          <Route path="profile/" element={<Sidebar />}>
            <Route path=":id" element={<Me />} />
            <Route path=":id/services" element={<MyService />} />
            <Route path=":id/favorites" element={<Me />} />
          </Route>
        )}
        <Route path="services" element={<ServicePage />} />
        <Route path="services/:id" element={<DetailPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Router;
