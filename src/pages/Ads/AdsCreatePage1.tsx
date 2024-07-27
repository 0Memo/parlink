/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, Select, Card, FileInput, Label, FloatingLabel,Textarea  } from "flowbite-react";
// import { Link } from "react-router-dom";
import { createAd, getCategories, getSubCategories } from '../../services/api/ads';
import { useEffect, useState } from "react";

type Category = string;
interface FormDataObject {
  [key: string]: any;
  files?: string;
}

export default function AdCreatePage() {
  // ----------------------------   Categories block-----------------

  const [categories, setCategories] = useState<Category[]>([]);
  
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
        const response = await getCategories();
        const fetchedCategories = response.data.categories;

        setCategories([ ...fetchedCategories]);
      //   console.log('Catégories récupérées:', fetchedCategories);
    } catch (error) {
        console.error('Erreur lors de la récupération des catégories:', error);
    }
  };

  const [subCategories, setSubCategories] = useState<Record<Category, string[]>>({});
  const fetchSubCategories = async (category: Category) => {
    try {
        const response = await getSubCategories(category);

        if (response && response.data && Array.isArray(response.data.subCategories) ){
            setSubCategories((prevSubCategories) => ({
                ...prevSubCategories,
                [category]: response.data.subCategories,
            }));

        } else {
            console.warn(`Réponse inattendue pour les sous-catégories de la catégorie ${category}:`, response);
            setSubCategories((prevSubCategories) => ({
                ...prevSubCategories,
                [category]: [],
            }));
        }
    } catch (error) {
        console.error(`Erreur lors de la récupération des sous-catégories de la catégorie ${category}:`, error);
        setSubCategories((prevSubCategories) => ({
            ...prevSubCategories,
            [category]: [],
        }));
    }
  };

  const [selectedCategory, setSelectedCategory] = useState(categories[0]); 

  const handleCategoryChange = async (e:any) => {
    setSelectedCategory(e.target.value);
    fetchSubCategories(selectedCategory)
  }

// ------------------------------------fin categorie block----------------

  const extractFormData = (formData:FormData) => {
  const formDatasSubmitedObject: FormDataObject = {};
    for (const [key, value] of formData.entries()) {
      formDatasSubmitedObject[key] = value;
    }
    const files = formData.get('files');
    if (files && files instanceof File) {
      formDatasSubmitedObject.files = files.name;
    }
    return formDatasSubmitedObject;
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formDatasSubmitedObject = extractFormData(formData);

  // todo ; trouver id user a partir du token , trouver id cat et subcat a partir du name
  // FIXME:

    const tsContent = `export const formData = ${JSON.stringify(formDatasSubmitedObject, null, 2)};`;
    const file = new Blob([tsContent], { type: 'application/typescript' });
    const formDataToSend = new FormData(e.currentTarget);
    formDataToSend.append('file', file, 'formData.ts');

    // console.log("formDataToSend",tsContent)

    const response = await createAd(tsContent);
    console.log('response', response)
    alert(`Formulaire soumis`);

  };

  const renderTextInput = (name: string | undefined, label: string, type = 'text', required = false) => {
    return (
      <FloatingLabel
        variant="outlined"
        label={label}
        id={name}
        name={name}
        type={type}
        required={required}
        
      />
    );
  };

  return (
    <>

      <div className="flex justify-center">
        <Card className="w-full md:max-w-md md:mx-auto hover:bg-transparent">
          <h5 className="text-2xl font-bold tracking-tight text-blue-800 dark:text-white">
            Ajouter une annonce
          </h5>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* todo : dynamique a partir des caetegeories de la bdd */}
            <Select name='category' id="role" required onChange={handleCategoryChange}> 
            
              <option className="text-base font-medium text-blue-700" key='categorie'>Categorie</option>

              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
                    </Select>
                
            <Select name='subcategory' id="subcategory" required >
          <option className="text-base font-medium text-blue-700">
            Sub-categorie
          </option>
          
          {(subCategories[categories[0]]).map((subcategory, index) => (
            <option key={index} value={subcategory} >
              {subcategory}
            </option>
          ))}
        </Select>
            {renderTextInput('title', 'Titre', 'text', true)}
          
            <div className="relative">
              <Textarea  id="description" aria-describedby="outlined_success_help" className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder="" data-testid="floating-label" name="description" required rows={4} />
                <label form="description" className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-gray-500 transition-transform duration-300 peer-placeholder-shown:top-1/4 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500">Description</label></div>

            <div className="grid grid-cols-3 gap-4">
              <span className="col-span-2" >   {renderTextInput('startdate', 'Début', 'date')}</span>

            {renderTextInput('starttime', 'heure', 'time')}
            
            </div>

            <div className=" grid grid-cols-3 gap-4">
            <span className="col-span-2" >{renderTextInput('enddate', 'Fin', 'date')}</span>

            {renderTextInput('endtime', 'heure', 'time')}
            
            </div>
            
            {renderTextInput('attendees', 'Nombre de places', 'number')}
            {renderTextInput('city', 'Ville')}
            {renderTextInput('country', 'Pays')}
            {renderTextInput('address', 'Adresse')}

            <Label htmlFor="files" value="Ajouter une image" />
            <FileInput name="files" id="files" />

            <Button type="submit">Ajouter l'annonce</Button>
          </form>
        </Card>
      </div>
    </>
  );
}
