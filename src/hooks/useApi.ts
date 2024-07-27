/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from 'axios';

// Define interfaces for the expected response structure
interface TokenData {
    access_token: string;
    refresh_token: string;
}

interface RefreshTokenResponse {
    data: {
        data: TokenData;
    };
}

// Type guard to verify the structure of the response
function isRefreshTokenResponse(response: any): response is RefreshTokenResponse {
    return response && response.data && response.data.data && typeof response.data.data.access_token === 'string' && typeof response.data.data.refresh_token === 'string';
}

export function useApi() {

    const api: AxiosInstance = axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL,
        headers: {
            "Content-Type": "application/json"
        }
    });

    api.interceptors.request.use((config) => {
        const token = localStorage.getItem("access_token");

        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    });

    api.interceptors.response.use(
        (response:any) => response,
        async (error:any) => {
            if(error.response && error.response.status === 401) {
                const originalRequest = error.config;

                if(!originalRequest._retry) {
                    originalRequest._retry = true;
                } else return Promise.reject(error);

                const refresh_token = localStorage.getItem("refresh_token");

                if(refresh_token) {
                    try {
                        const result = await refreshToken(refresh_token);

                        if (isRefreshTokenResponse(result)) {
                            const { access_token, refresh_token: new_refresh_token } = result.data.data;

                            localStorage.setItem("access_token", access_token);
                            localStorage.setItem("refresh_token", new_refresh_token);

                            originalRequest.headers['Authorization'] = `Bearer ${access_token}`;

                            return api(originalRequest);
                        } else {
                            throw new Error('Invalid refresh token response');
                        }
                    } catch(error) {
                        localStorage.removeItem('access_token');
                        localStorage.removeItem('refresh_token');
                        return Promise.reject(error);
                    }
                } else {
                    localStorage.removeItem('access_token');
                    localStorage.removeItem('refresh_token');
                }
            }

            if(error.response && error.response.status === 500) {
                location.href = "/"
            }

            return Promise.reject(error);
        }
    )

    return api;
}

export async function refreshToken(refresh_token:string) {

    const apiRefresh: AxiosInstance = axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL,
        headers: {
            'Authorization' : "Bearer " + refresh_token 
        }
    });

    const headers = { Authorization : "Bearer " + refresh_token };
    console.log('headers', headers)
    // config.headers["Authorization"] = `Bearer ${token}`;
    console.log("RefreshTokenFcn",refresh_token)

    try {
        const response = await apiRefresh.post(`${import.meta.env.VITE_API_BASE_URL}auth/refresh_token`);

        console.log('response', response)
        
        return response;
    } catch (error) {
        console.error('Erreur:', error);
    }
}