import { Outlet, Navigate } from 'react-router-dom';

const AnonymousRoute = () => {
  const isLoggedIn = false;
  return isLoggedIn ? <Navigate to="/" replace /> : <Outlet />;
};

export default AnonymousRoute;
