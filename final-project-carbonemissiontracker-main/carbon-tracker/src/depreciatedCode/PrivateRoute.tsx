// misc/PrivateRoute.tsx
/************
 * This code segment was depreciated after the decision to abandon the use of JWT tokens
 * author: Zehao Song
 ************/

import { useUser } from '../contexts/UserContext.tsx';
import { Route, Navigate } from 'react-router-dom';
import { ReactElement } from 'react';

interface PrivateRouteProps {
    path: string;
    element: ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, element }) => {
    const { user } = useUser();
    return user ? <Route path={path} element={element} /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;