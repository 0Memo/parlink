/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from 'axios';

interface TokenData {
    access_token: string;
    refresh_token: string;
}

interface RefreshTokenResponse {
    data: {
        data: TokenData;
    };
}

function isRefreshTokenResponse(response: any): response is RefreshTokenResponse {
    return response && response.data && response.data.data && typeof response.data.data.access_token === 'string' && typeof response.data.data.refresh_token === 'string';
}

export function useApi(): AxiosInstance {

    const api: AxiosInstance = axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL || "https://parlinkback.vercel.app",
        withCredentials: true,
        headers: {
            "Content-Type": "application/json"
        },
        timeout: 10000,
    });

    api.interceptors.request.use((config) => {
        const token = localStorage.getItem("access_token");

        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    });

    api.interceptors.response.use(
        (response) => response,
        async (error) => {
            if(error.response && error.response.status === 401) {
                const originalRequest = error.config;

                if(!originalRequest._retry) {
                    originalRequest._retry = true;

                    const refresh_token = localStorage.getItem("refresh_token");

                    if(refresh_token) {
                        try {
                            const result = await refreshToken(refresh_token);

                            if (isRefreshTokenResponse(result)) {
                                const { access_token, refresh_token: new_refresh_token } = await refreshToken(refresh_token);

                                localStorage.setItem("access_token", access_token);
                                localStorage.setItem("refresh_token", new_refresh_token);

                                originalRequest.headers['Authorization'] = `Bearer ${access_token}`;

                                return api(originalRequest);
                            } else {
                                throw new Error('Invalid refresh token response');
                            }
                        } catch (refreshError) {
                            console.error('Refresh token failed:', refreshError);
                            clearTokensAndRedirect();
                            return Promise.reject(refreshError);
                        }
                    }
                }
                clearTokensAndRedirect();
            }
            if(error.response && error.response.status === 500) {
                location.href = "/"
            }
            return Promise.reject(error);
        }
    );

    return api;
}

async function refreshToken(refresh_token: string): Promise<TokenData> {
    const apiRefresh = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "https://parlinkback.vercel.app",
    headers: {
        Authorization: `Bearer ${refresh_token}`,
        "Content-Type": "application/json",
    },
    });

    const { data } = await apiRefresh.post('/auth/refresh_token');
    return data;
}

function clearTokensAndRedirect() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    window.location.href = '/login';
}