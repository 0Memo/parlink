/* eslint-disable @typescript-eslint/no-explicit-any */
//? la page de creation des comptes
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Accordion, Avatar, Tooltip, List } from 'flowbite-react';
import { AiTwotoneDelete } from 'react-icons/ai';
import UserCreatePage from './UserCreatePage';
import { IoPersonAdd } from "react-icons/io5";
import { getUsers } from '../../services/api/user';

const UserManagement = ({ handleSubmitUser }:any) => {
  const [childCounterFromControlButton, setChildCounterFromControlButton] = useState(0);
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  console.log('childCounterFromControlButton', childCounterFromControlButton)
  console.log('setChildCounterFromControlButton', setChildCounterFromControlButton)
  console.log('loading', loading)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersDatas = await getUsers();
        setUsers(usersDatas.data.users);
      } catch (error) {
        console.error('Failed to fetch users', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const validationSchema = Yup.object({
    nom: Yup.string().required(`Le prénom est requis`),
    prenom: Yup.string().required(`Le nom est requis`),
    email: Yup.string().email(`Format d'email invalide`).required(`L'email est requis`),
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
      alert(`Nouvel utilisateur ajouté`);
    },
  });
  console.log('formik', formik);
  const color ="text-red-800";
  console.log('color', color);

  if (loading) {
    return <p>Chargement...</p>;
  }

  return (
    <> 
      <h5 className="text-2xl font-bold tracking-tight text-blue-800 dark:text-white my-3">
        Gestion des utilisateurs 
      </h5>

      <div className=' flex flex-col gap-4 w-full md:w-1/2 lg:w-1/2 mx-auto'>
        <Accordion collapseAll className='w-full '>
          <Accordion.Panel className=''>
            <Accordion.Title className='hover:bg-vlue-700 text-left bg-blue-700 text-white'>
            <span className=" relative flex gap-2 p-1 text-xl  font-bold tracking-tight  text-white dark:text-white">
                <span ><IoPersonAdd /> </span> <span >Ajouter un utilisateur </span>
            </span>
            </Accordion.Title>
            <Accordion.Content>
              <UserCreatePage handleSubmitUser={handleSubmitUser} />
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
        <Accordion>
          { users && users.map((user:any) => (
            <Accordion.Panel key={user.id} className=''>
              <Accordion.Title className="userData hover:bg-violet-100">
                <div className="lg:w-[500px] grid grid-cols-3 gap-4 ">
                  <span className='flex gap-5 col-span-2' >
                    <Avatar className='w-auto' img={user.Profile ? user.Profile.profilePicture : ""} alt={`${user.firstName} ${user.lastName}`} rounded size="sm" />
                    <p className="truncate text-left text-sm font-medium text-gray-900 dark:text-white">{`${user.firstName} ${user.lastName}`}</p>
                  </span>
                  <Link to={`/delete-user/${user.id}`} className={`flex justify-end  ${(user.delete === '1')?"text-red-800":(user.delete === '2')?"text-green-800":"text-gray-400"}`}>

                  <Tooltip content={`${(user.delete === '1')?"demande":(user.delete === '2')?"non-conforme":"suppresion"}`} style="light">
                    <AiTwotoneDelete />
                    </Tooltip>
                  </Link>
                </div>
              </Accordion.Title>
              <Accordion.Content className="userContent" >
                <div className="flex flex-col text-left">
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">Mail : {user.email}</p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">Téléphone : {user.Profile ? user.Profile.phone : ""}</p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">Adresse : {user.Profile ? user.Profile.address : ""}</p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">Ville : {user.Profile ? user.Profile.city : ""}</p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">Code postal : {user.Profile ? user.Profile.postalCode : ""}</p><br />

                  <List className="userChild truncate text-sm text-gray-500 dark:text-gray-400">Enfants : 
                    {user.userHasChild && user.userHasChild.map((child: any) => (
                      <List.Item key={child.children.id} className="truncate text-sm text-gray-500 dark:text-gray-400">{child.children.firstName +" "+child.children.lastName}</List.Item>
                    ))}
                  </List><br />
                  <List className="userTopic truncate text-sm text-gray-500 dark:text-gray-400">Matières : 
                  {user.userHasSubjects && user.userHasSubjects.map((subject: any) => ( 
                    <List.Item key={subject.subjects.id} className="truncate text-sm text-gray-500 dark:text-gray-400">{subject.subjects.name}</List.Item>))
                  }
                  </List>
                </div>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default UserManagement;