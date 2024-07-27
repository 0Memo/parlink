/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { User } from '../../services/interfaces/User';
import ChildForm from '../../components/Child/ChildForm';
import ControlButtonNumber from '../../services/utils/ControlButtonNumber';
import { Button, FloatingLabel, Dropdown } from "flowbite-react";
// GET subject from bdd 
import subject from './subjectFaker';
import profileFaker from './profileFaker';

import { register } from '../../services/api/user'; 

const users = profileFaker;
console.log('users', users)

interface PropUserPage {
  handleSubmitUser: (author: User) => void;
}

export default function UserCreatePage(props: PropUserPage) {
  const handleSubmitUser = props.handleSubmitUser;
  console.log('handleSubmitUser', handleSubmitUser)

  const [childCounterFromControlButton, setChildCounterFromControlButton] = useState<number>(0);

  const handleUpdateChildCounter = (childCounter: any) => {
    setChildCounterFromControlButton(childCounter);
  };

  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [children, setChildren] = useState<any[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, item: string) => {
    if (event.target.checked) {
      setSelectedSubjects([...selectedSubjects, item]);
    } else {
      setSelectedSubjects(selectedSubjects.filter((i) => i !== item));
    }
  };

  const handleChildFormChange = (index: number, childData: any) => {
    const updatedChildren = [...children];
    updatedChildren[index] = childData;
    setChildren(updatedChildren);
  };

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
      role: 'parent',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const userFormData = {
        user: {
          firstName: values.nom,
          lastName: values.prenom,
          role: values.role,
          email: values.email,
        },
        subjects: selectedSubjects,
        children: children.map(child => ({
          firstName: child.firstName,
          lastName: child.lastName,
          school: child.school,
          class: child.class,
        }))
      };

      console.log(userFormData);

      try {
        const response = await register(userFormData);

        if (response.data) {
          alert('Nouveau utilisateur ajouté avec succès');
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
    <div className='flex flex-col gap-3 md:flex-row'>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 w-full mx-auto">
        <div className="col-grid-2">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <select
                id="role"
                name="role"
                onChange={formik.handleChange}
                value={formik.values.role}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="parent">Parent</option>
                <option value="intervenant">Intervenant</option>
                <option value="admin">Administrateur</option>
              </select>
            </div>
            <div>
              <Dropdown label="Sujets" dismissOnClick={false} color="gray" theme={{ floating: { target: "w-full" } }}>
                {subject.map((item) => (
                  <Dropdown.Item key={item.name}>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={item.name}
                        checked={selectedSubjects.includes(item.name)}
                        onChange={(e) => handleCheckboxChange(e, item.name)}
                        className="checkbox"
                      />
                      <label htmlFor={item.name} className="flex">
                        {item.name}
                      </label>
                    </div>
                  </Dropdown.Item>
                ))}
              </Dropdown>
            </div>
          </div>

          <FloatingLabel variant="outlined" label="Nom" sizing="sm" id="nom" name="nom" onChange={formik.handleChange} value={formik.values.nom} />
          {formik.touched.nom && formik.errors.nom ? (<div>{formik.errors.nom}</div>) : null}
          <FloatingLabel variant="outlined" label="Prenom" sizing="sm" id="prenom" name="prenom" onChange={formik.handleChange} value={formik.values.prenom} />
          {formik.touched.prenom && formik.errors.prenom ? (<div>{formik.errors.prenom}</div>) : null}
          <FloatingLabel variant="outlined" label="&#9993; name@email.com" sizing="sm" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
          {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}
          <span className='flex items-center '><span> Nb. enfants</span> <ControlButtonNumber handleChildCounter={handleUpdateChildCounter} /></span>

          {Array.from({ length: childCounterFromControlButton }, (_, index) => (
            <ChildForm key={index} index={index} onChange={handleChildFormChange} />
          ))}
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
