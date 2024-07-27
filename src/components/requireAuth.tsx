/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet } from "react-router-dom";
import { jwtDecode, JwtPayload } from "jwt-decode";
import NotFoundPage from "../services/utils/NotFoundPage";

interface CustomPayLoad extends JwtPayload {
    role?: string;
}

const RequireAuth = ({ allowedRoles }:any) => {
    const access_token = localStorage.getItem('access_token');
    let userRole = null;

    if (access_token) {
        try {
            const tokenDecode = jwtDecode(access_token) as CustomPayLoad;
            userRole = tokenDecode?.role;
        } catch (error) {
            console.error("Token invalide", error);
        }
    }

    return (
        allowedRoles.includes(userRole)
            ? <Outlet />
            : <NotFoundPage />
    );
}

export default RequireAuth;
