/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, FloatingLabel, Card } from 'flowbite-react';
import {  updateUserPswd } from '../../services/api/user'; 
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

interface PropUserPage {
  handleSubmitUser: (author: any) => void;
}

export default function ForgotPswdPage(_props: PropUserPage) {

  const navigate = useNavigate();
  const validationSchema = Yup.object({
  email:Yup.string().required('email est requis'),
  code:Yup.string().required('code est requis'),
    password1: Yup.string().required('Le mot de passe est requis'),
    password2: Yup.string().required('La confirmation du mot de passe est requise')
      .oneOf([Yup.ref('password1')], 'Les mots de passe ne correspondent pas')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      code : '',
      password1: '',
      password2: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const userFormData = {
        password: values.password1,
        email: values.email,
        code : values.code
      };

      console.log("formdata", userFormData);

      try {
        const response = await updateUserPswd(userFormData);

        if (response.data) {
          Swal.fire({
            title: 'Formulaire soumis avec succès',
            text: 'Votre mot de passe a été mis à jour.',
            icon: 'success',
            confirmButtonText: 'Fermer'
          });
          navigate('/login');
        } else {
          Swal.fire({
            title: 'Erreur',
            text: 'Une erreur est survenue lors de la mise à jour du mot de passe.',
            icon: 'error',
            confirmButtonText: 'Fermer'
          });
        }
      } catch (error) {
        console.error('Erreur:', error);
        Swal.fire({
          title: 'Erreur',
          text: 'Une erreur est survenue lors de la mise à jour du mot de passe.',
          icon: 'error',
          confirmButtonText: 'Fermer'
        });
      }
    }
  });

  return (
    <>
      <div className="flex justify-center">
        <Card className="w-full md:max-w-md md:mx-auto hover:bg-transparent">
          <h5 className="text-2xl font-bold tracking-tight text-blue-800 dark:text-white">
            Changer mot de passe
          </h5>
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 w-full mx-auto">
          <div className="col-grid-2">
              <FloatingLabel
                variant="outlined"
                label="Email"
                sizing="sm"
                id="email"
                name="email"
                type="texte"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.password1 && formik.errors.password1 ? (<div>{formik.errors.password1}</div>) : null}
            
              <FloatingLabel
                variant="outlined"
                label="code"
                sizing="sm"
                id="Code"
                name="code"
                type="texte"
                onChange={formik.handleChange}
                value={formik.values.code}
              />
              {formik.touched.password1 && formik.errors.password1 ? (<div>{formik.errors.password1}</div>) : null}
      
              <FloatingLabel
                variant="outlined"
                label="Mot de passe"
                sizing="sm"
                id="password1"
                name="password1"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password1}
              />
              {formik.touched.password1 && formik.errors.password1 ? (<div>{formik.errors.password1}</div>) : null}
              <FloatingLabel
                variant="outlined"
                label="Confirmer le mot de passe"
                sizing="sm"
                id="password2"
                name="password2"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password2}
              />
              {formik.touched.password2 && formik.errors.password2 ? (<div>{formik.errors.password2}</div>) : null}
            </div>
            <Button type="submit">Soumettre</Button>
          </form>
          <div className="text-left">
            <Link to="/login" className="ms-2 text-sm text-blue-400 dark:text-blue-300 hover:underline">Se connecter</Link>
          </div>
        </Card>
      </div>
    </>
  );
}
