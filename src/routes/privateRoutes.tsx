import Cookies from 'js-cookie';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { SESSION_COOKIE_NAME } from '../services/auth';
import { isAuthenticated } from '../services/auth';

interface PropType {
    component: React.FC;
}

const PrivateRoute: FC<PropType> = ({ component: Component }) => {
    if (isAuthenticated()) return <Component />;
    return <Navigate to='/login' />;
};

export default PrivateRoute;