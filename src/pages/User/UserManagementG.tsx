/* eslint-disable @typescript-eslint/no-explicit-any */
//? la page de creation des comptes
import { useState/* , useEffect */ } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { /* Button, Card, FloatingLabel, Tabs,  */Accordion, /* List,  */Avatar } from 'flowbite-react';
// import { MdAddToPhotos } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';
import profileFaker from './profileFaker';
import UserCreatePage from './UserCreatePage';
// import { User } from '../../services/interfaces/User';
// import ControlButtonNumber from '../../services/utils/ControlButtonNumber';
import { IoPersonAdd } from "react-icons/io5";
import { Tooltip } from "flowbite-react";

const users = profileFaker;

const UserManagement = ({ handleSubmitUser }:any) => {
  const [childCounterFromControlButton, setChildCounterFromControlButton] = useState(0);
  console.log('childCounterFromControlButton', childCounterFromControlButton)
  console.log('setChildCounterFromControlButton', setChildCounterFromControlButton)

  const validationSchema = Yup.object({
    nom: Yup.string().required('Le prénom est requis'),
    prenom: Yup.string().required('Le nom est requis'),
    email: Yup.string().email('Format d\'email invalide').required('L\'email est requis'),
  });

  const formik = useFormik({
    initialValues: {
      nom: '',
      prenom: '',
      email: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      alert("Nouveau utilisateur ajouté");
    },
  });
  console.log('formik', formik)
const color ="text-red-800";
console.log('color', color)
  return (
    <> 
      <h5 className="text-2xl font-bold tracking-tight text-blue-800 dark:text-white my-3">
        Gestion des utilisateurs 
      </h5>

      <div className=' flex flex-col gap-4 w-full md:w-1/2 lg:w-1/2 mx-auto'>
        <Accordion  collapseAll className='w-full '>
          <Accordion.Panel className=''>
            <Accordion.Title className='hover:bg-vlue-700 text-left bg-blue-700 text-white'>
            <span className=" relative flex gap-2 p-1 text-xl  font-bold tracking-tight  text-white dark:text-white">
                <span ><IoPersonAdd /> </span> <span >Ajouter un utilisateur </span>
            </span>
                {/* <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-700 relative flex gap-2 p-1 mt-2'>
                                  <span className="relative text-white m-1">Ajouter un utilisateur </span> <span>
                                      <IoPersonAdd  className="relative text-white h-5 w-5" />
                                  </span>
                              </span> */}
            </Accordion.Title>
            <Accordion.Content>
              <UserCreatePage handleSubmitUser={handleSubmitUser} />
            </Accordion.Content>
          </Accordion.Panel>
          <div>
          { users.map((user) => (            
            <Accordion.Panel key={user.id} className=''>
              <Accordion.Title className=" hover:bg-violet-100">
                <div className=" lg:w-[500px]  grid grid-cols-3 gap-4 ">
                  <span className='flex gap-5 col-span-2' ><Avatar className='w-auto' img={user.file} alt={`${user.firstname} ${user.lastname}`} rounded size="sm" />
                  <p className="truncate text-left text-sm font-medium text-gray-900 dark:text-white">{`${user.firstname} ${user.lastname}`}</p>
                  </span>
                  <Link to={`/delete-user/${user.id}`} className={`flex justify-end  ${(user.delete === '1')?"text-red-800":(user.delete === '2')?"text-green-800":"text-gray-400"}`}>

                  <Tooltip content={`${(user.delete === '1')?"demande":(user.delete === '2')?"non-conforme":"suppresion"}`} style="light">
                    <AiTwotoneDelete />
                    </Tooltip>
                  
                  </Link>
                </div>
              </Accordion.Title>
              <Accordion.Content >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {user.phone}
                </div>
                <ul className="truncate text-sm text-gray-500 dark:text-gray-400">
                  Enfants :
                  <li>Léa classe : CM1</li>
                  <li>Leo classe : CP</li>
                </ul>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </div>
      </Accordion>
    </div>
    
    </>
  );
};

export default UserManagement;