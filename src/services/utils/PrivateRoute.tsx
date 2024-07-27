import { Outlet, Navigate} from 'react-router-dom';

const PrivateRoute = () => {
    const access_token = localStorage.getItem('access_token');

    return (
        access_token
            ? <Outlet />
            :<Navigate to="/" />
    );
}

export default PrivateRoute