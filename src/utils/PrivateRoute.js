import { Outlet, Navigate } from 'react-router-dom';
import { checkUserAuth } from './auth';

const PrivateRoute = () => {
  const isLoggedIn = checkUserAuth();
  console.log('PrivateRoute');
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
