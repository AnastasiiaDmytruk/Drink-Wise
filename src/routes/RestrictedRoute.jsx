import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ children, redirectTo = '/' }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export default RestrictedRoute;
