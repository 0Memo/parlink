import { Link } from 'react-router-dom';
import './LoginPage.css';

import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { signin } from '../../services/api/auth';
import { Card } from 'flowbite-react';
import ParLink from '../../assets/parlink.png';

export default function LoginPage({ setIsConnected }: { setIsConnected: (status: boolean) => void } ) {
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

        if (response.data && response.data.access_token) {
          localStorage.setItem('access_token', response.data.access_token);
          localStorage.setItem('refresh_token', response.data.refresh_token);
          setLoginFailed(false);
          setIsConnected(true);
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
        <img src={ParLink} alt="logo ParLink" className="h-10 sm:h-13 scale-150"/>
          <h5 className="text-2xl font-bold tracking-tight text-blue-800 dark:text-white mb-3"
          data-cy="cypress-title">Connexion</h5>
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

            <div  className=" flex flex-col text-sm ">
              <p className='text-start'>Username : admin@email.fr</p>
              <p className='text-start'>Mdp : admin</p>
            </div>
            
            <div  className=" flex items-center justify-center">
            <button
              type="submit"
              data-cy="login"
              className="relative flex items-center  p-1 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-900 gap-2 mt-2 w-30" 
            >
              <span className="relative text-white m-1">Connexion</span>

            </button>
            </div>
        
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex items-start mb-1">
                {/* <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-800 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                />
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Se souvenir de moi</label> */}
              </div>
              
            </div> 
          
          </form>
          <div className="flex flex-col  md:flex-row md:justify-between">
          <div className="text-left my-1">
                <Link to="/forgot-password-page" className="ms-2 text-sm text-blue-800 dark:text-blue-300 hover:underline"><strong>Mot de passe oublié ?</strong></Link>
              </div>
          <div className="text-left my-1">
                <Link to="/createAdmin" className="ms-2 text-sm text-blue-800 dark:text-blue-300 hover:underline"><strong>Créer un compte Client</strong></Link>
          </div>
</div>
          </Card>
        </div>
    </>
  );
}