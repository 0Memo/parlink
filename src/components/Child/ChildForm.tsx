/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { FloatingLabel } from "flowbite-react";

interface ChildFormProps {
    index: number;
    onChange: (index: number, childData: any) => void;
}

const ChildForm: React.FC<ChildFormProps> = ({ index, onChange }) => {
    const [childData, setChildData] = useState({
        firstName: '',
        lastName: '',
        school: '',
        classe: ''
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setChildData({ ...childData, [name]: value });
        onChange(index, { ...childData, [name]: value });
    };

    return (
        <div>
        <h5 className="text-1xl font-bold tracking-tight text-blue-600 dark:text-white text-left"> Enfant {index+1} </h5>
        <FloatingLabel variant="outlined" label="Nom" sizing="sm" id={`nom-${index}`} name="firstName" onChange={handleInputChange} value={childData.firstName} />
        <FloatingLabel variant="outlined" label="Prenom" sizing="sm" id={`prenom-${index}`} name="lastName" onChange={handleInputChange} value={childData.lastName} />
        <FloatingLabel variant="outlined" label="Ecole" sizing="sm" id={`school-${index}`} name="school" onChange={handleInputChange} value={childData.school} />
        <FloatingLabel variant="outlined" label="Classe" sizing="sm" id={`classe-${index}`} name="classe" onChange={handleInputChange} value={childData.classe} />
        </div>
    );
};

export default ChildForm;