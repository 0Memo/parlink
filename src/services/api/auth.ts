/* eslint-disable @typescript-eslint/no-explicit-any */
// import axios from "axios";
import { useApi } from "../../hooks/useApi.ts";

// eslint-disable-next-line react-hooks/rules-of-hooks
const api = useApi();

interface AuthSignin {
  email: string,
  password: string
}

export async function signin(body: AuthSignin): Promise<{
  data: any; access_token: string; refresh_token: string
}> {
  try {
    const response = await api.post('/auth/login', body, {
      withCredentials: true,
    });

    if (response.data?.access_token && response.data?.refresh_token) {
      const { access_token, refresh_token } = response.data;
    
      // Store tokens
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);
    
      return response.data;
    } else {
      throw new Error('Invalid response structure from server');
    }
  } catch (error: any) {
    if (error.response) {
      console.error('Error response from server:', error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error during login:', error.message);
    }
    throw error;
  }
}

export async function signOut() {
  try {
    // Make API call to sign out
    const response = await api.post(`auth/signout`);

    // Assuming the signout endpoint returns a success message or status
    if (response.status === 200) {
      // Clear tokens from localStorage
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      // Redirect or perform any other necessary actions after sign-out
      location.href = "/"; // Redirect to login page after sign-out
    } else {
      console.error('La déconnexion a échoué:', response.data.message);
      // Handle error if necessary
    }
  } catch (error) {
    console.error('La déconnexion a échoué:', error);
    // Handle error if necessary
  }
}