import { Link } from 'react-router-dom';
import './LoginPage.css';

import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { signin } from '../../services/api/auth';
import { Card } from 'flowbite-react';


/* interface AuthSignin {
  email: string;
  password: string;
} */

export default function LoginPage() {
  const navigate = useNavigate();
  const [loginFailed, setLoginFailed] = useState(false);

  const dataSchema = Yup.object({
    email: Yup.string().email('Adresse email invalide').required('Champs obligatoire'),
    password: Yup.string().required('Champs obligatoire')
  });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: dataSchema,
    onSubmit: async values => {
      try {
        const response = await signin(values);

        if (response.data.access_token) {
          localStorage.setItem('access_token', response.data.access_token);
          localStorage.setItem('refresh_token', response.data.refresh_token);
          setLoginFailed(false);
          navigate('/ads-grid');
        }
      } catch (error) {
        console.error('Login failed', error);
        setLoginFailed(true);
      }
    },
  });

  return (
    <>
      <div className="flex justify-center">
      <Card className="w-full md:max-w-md md:mx-auto hover:bg-transparent">     
          <h1 className="font-titleTest text-3xl my-8" data-cy="cypress-title">Connexion</h1><br />
          {loginFailed && <p className="text-red-500 text-sm">Identifiants incorrects</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input
                onChange={handleChange}
                value={values.email}
                type="email"
                id="email"
                name="email"
                role="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">Mot de passe</label>
              <input
                onChange={handleChange}
                value={values.password}
                type="password"
                id="password"
                name="password"
                role="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <button
              type="submit"
              data-cy="login"
              className="text-white bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Connexion
            </button>
            <br /><br />
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex items-start mb-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                />
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Se souvenir de moi</label>
              </div>
              <div className="text-left">
                <Link to="/forgot-password-page" className="ms-2 text-sm text-blue-400 dark:text-blue-300 hover:underline">Mot de passe oublié ?</Link>
              </div>
            </div>
          </form>
          <div className="text-left">
                <Link to="/createAdmin" className="ms-2 text-sm text-blue-400 dark:text-blue-300 hover:underline">Créer un compte Client</Link>
          </div>

          </Card>
        </div>
    </>
  );
}
