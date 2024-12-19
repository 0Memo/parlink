/* eslint-disable @typescript-eslint/no-explicit-any */
// import axios from "axios";
import { useApi } from "../../hooks/useApi.ts";

// eslint-disable-next-line react-hooks/rules-of-hooks
const api = useApi();
interface AuthSignin {
  email: string,
  password: string
}

export async function signin(body: AuthSignin) {
  try {
    const response = await api.post(`auth/login`, body);
    return response.data;
  } catch (error:any) {
    console.error('Login Error:', error.response || error.message);
    throw new Error(error);
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