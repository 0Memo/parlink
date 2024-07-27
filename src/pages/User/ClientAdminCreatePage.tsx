/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { FloatingLabel, Card } from "flowbite-react";
// GET subject from bdd 
import { MdAddToPhotos } from "react-icons/md";

import {registerClient} from '../../services/api/user'; 
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Logo from '../../assets/logo.png';

interface PropUserPage {
  handleSubmitUser: (author:any) => void;
}

export default function ClientAdminCreatePage(props: PropUserPage) {
  const handleSubmitUser = props.handleSubmitUser;
  console.log('handleSubmitUser', handleSubmitUser)

  const validationSchema = Yup.object({
  nom: Yup.string().required('Le nom est requis'),
  prenom: Yup.string().required('Le prénom est requis'),
  email: Yup.string().email('Format d\'email invalide').required('L\'email est requis'),
  role: Yup.string().required('Le rôle est requis'),
  });

  const formik = useFormik({
    initialValues: {
      nom: '',
      prenom: '',
      email: '',
      role: 'admin',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const userFormData = {
              firstName: values.nom,
          lastName: values.prenom,
          role: "admin",
          email: values.email,
          };

      console.log("formdata",userFormData);


      try {
        const response = await registerClient(userFormData);
        console.log(response)

        if (response.data) {
          //TODO : une fois le mailing mis en place, enlever la redirection sur pa gae changer mot de passe
          // alert('Nouveau utilisateur ajouté avec succès: Code activation : ${JSON.stringify(response.data.user.password)}');

          Swal.fire({
            title: 'Form Submitted',
            html: `
              <p>Votre compte a été crée.Pour changer le mot de passe copier le code et le renseigner dans formulaire suivant</p>
              <p>Code activation : ${JSON.stringify(response.data.user.password)}</p>
              <a href="/forgot-password-page" class="ms-2 text-sm text-blue-400 dark:text-blue-300 hover:underline">Changer mot de passe</a>
            `,
            icon: 'success',
            confirmButtonText: 'Close'
          });
          // TODO----------------------------------------------------------------
        } else {
          alert('Erreur lors de l\'ajout de l\'utilisateur');
        }
      } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur lors de l\'ajout de l\'utilisateur');
      }
    },
  });

  return (
    <>  
      <div className="p-3">
        <h5 className="text-2xl font-bold tracking-tight text-blue-800 dark:text-white mb-10">
          <img src={Logo} alt="logo ParLink" className="ml-8 h-6 sm:h-9 scale-150"></img>
          Bienvenue sur votre application <span className='text-red-600'>Par</span><span className='text-blue-900'>Link</span>
        </h5>
    
        <div className="flex flex-col md:flex-row md:items-start gap-5 m-3">
          <div className="flex flex-col m-3 items-start w-full md:w-1/2">
            <p className="text-justify mb-4">
              Nous sommes ravis de vous accueillir dans cette plateforme dédiée aux parents d'élèves de votre association. Ici, vous pouvez créer votre comunauté des Parents "en lien".
            </p>
            <h5 className="text-xl font-bold tracking-tight text-blue-800 dark:text-white mb-5">
              Votre rôle d'administrateur
            </h5>
            <p className="text-justify mb-4">
              En tant que premier administrateur, vous jouez un rôle essentiel dans la création d'un environnement collaboratif et sécurisé pour tous les parents de notre école. Votre engagement aidera à bâtir un espace où les parents peuvent échanger, s'informer et s'entraider.
            </p>
            <ul className="list-disc text-justify" > Votre rôle vous permetra : 
              <li className='text-justify  m-3 ' >
                <strong>Gérer les utilisateurs</strong> : Invitez d'autres parents à rejoindre la plateforme et assurez-vous qu'ils respectent les règles de la communauté.
              </li>
              <li className='text-justify  m-3 '>
                <strong>Modérer le contenu</strong> : Surveillez les discussions et les partages pour maintenir un environnement respectueux et pertinent.
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2">
            <Card className="w-full md:max-w-md mx-auto md:mx-0">
              <h5 className="text-xl font-bold tracking-tight text-blue-800 dark:text-white mb-3">
                Commencez dès maintenant
              </h5>
              <p className="text-justify mb-3">
                Pour commencer, créez votre compte administrateur en fournissant les informations nécessaires.
              </p>
              <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 w-full mx-auto items-center">
                <div className="grid grid-cols-1 gap-4 w-full">
                  <FloatingLabel variant="outlined" label="Nom" sizing="sm" id="nom" name="nom" onChange={formik.handleChange} value={formik.values.nom} />
                  {formik.touched.nom && formik.errors.nom ? (<div>{formik.errors.nom}</div>) : null}
                  <FloatingLabel variant="outlined" label="Prenom" sizing="sm" id="prenom" name="prenom" onChange={formik.handleChange} value={formik.values.prenom} />
                  {formik.touched.prenom && formik.errors.prenom ? (<div>{formik.errors.prenom}</div>) : null}
                  <FloatingLabel variant="outlined" label="&#9993; name@email.com" sizing="sm" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
                  {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}
                </div>
                <button className="relative flex items-center p-1 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-700 relative flex gap-2 p-1 mt-2 w-30" type="submit">
                  <span className="relative text-white m-1">Créer mon compte</span>
                  <MdAddToPhotos className="relative text-white h-5 w-5" />
                </button>
              </form>
              <div className="text-left mt-4">
                <Link to="/login" className="text-sm text-blue-700 dark:text-blue-700 hover:underline">Se connecter</Link>
              </div>
              <a href="/forgot-password-page" className="ms-2 text-sm text-blue-400 dark:text-blue-300 hover:underline">Changer mot de passe</a>
            </Card>
          </div>
        </div>
      </div>
    </>
  );  
}