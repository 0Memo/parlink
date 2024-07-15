import { Button, TextInput, Select, Card, FileInput, Label, FloatingLabel, Textarea } from "flowbite-react";
import { getCategories, getSubCategories, createAd } from '../../services/api/ads';
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { create } from "cypress/types/lodash";
type Category = string;

const extractFormData = (formData) => {
  const formDatasSubmitedObject = {
    title: formData.get('title'),
    description: formData.get('description'),
    startTime: `${formData.get('startdate')}T${formData.get('startTime')}:00.000Z`,
    endTime: `${formData.get('enddate')}T${formData.get('endTime')}:00.000Z`,
    duration: 8, // Calculer la durée si nécessaire
    address: formData.get('address'),
    postalCode: "00135-0498", // Ajouter le champ postalCode si disponible
    city: formData.get('city'),
    country: formData.get('country'),
    lat: "45645", // Ajouter la logique pour obtenir la latitude réelle
    lng: "45454", // Ajouter la logique pour obtenir la longitude réelle
    attendees: parseInt(formData.get('attendees')),
    transport: "van", // Ajouter le champ transport si disponible
    conform: true, // Ajouter le champ conform si disponible
    status: "report", // Ajouter le champ status si disponible
    adPicture: formData.get('files').name,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    userId: extractUserIdFromToken(), // Extraire userId à partir du token
    categoryId: getCategoryId(formData.get('category')),
    subCategoryId: getSubCategoryId(formData.get('subcategory')),
  };
  return formDatasSubmitedObject;
};

const extractUserIdFromToken = () => {
  const token = localStorage.getItem('accessToken'); // Récupérer le token du localStorage (ou de n'importe où il est stocké)
  if (token) {
    const decodedToken = jwtDecode(token);
    return decodedToken.userId; // Assurez-vous que le payload du token contient bien un userId
  }
  return null;
};

const getCategoryId = (categoryName) => {
  // Ajouter la logique pour obtenir l'ID de la catégorie en fonction du nom
  return "052ec5bb-4c06-408c-92df-e16168ecc67c"; // Exemple d'ID de catégorie
};

const getSubCategoryId = (subCategoryName) => {
  // Ajouter la logique pour obtenir l'ID de la sous-catégorie en fonction du nom
  return "0677791e-8949-4fad-9c30-262a8c0327dc"; // Exemple d'ID de sous-catégorie
};

export default function AdCreatePage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      const fetchedCategories = response.data.categories;
      setCategories([...fetchedCategories]);
      console.log('Catégories récupérées:', fetchedCategories);
    } catch (error) {
      console.error('Erreur lors de la récupération des catégories:', error);
    }
  };

  const fetchSubCategories = async (category: Category) => {
    try {
      const response = await getSubCategories(category);
      if (response && response.data && Array.isArray(response.data.subCategories)) {
        setSubCategories(response.data.subCategories);
        console.log('Sous-catégories récupérées:', response.data.subCategories);
      } else {
        console.warn(`Réponse inattendue pour les sous-catégories de la catégorie ${category}:`, response);
        setSubCategories([]);
      }
    } catch (error) {
      console.error(`Erreur lors de la récupération des sous-catégories de la catégorie ${category}:`, error);
      setSubCategories([]);
    }
  };

  const handleCategoryChange = async (e: any) => {
    const category = e.target.value;
    setSelectedCategory(category);
    fetchSubCategories(category);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDatasSubmitedObject = extractFormData(formData);

    const tsContent = `export const formData = ${JSON.stringify(formDatasSubmitedObject, null, 2)};`;
   
    try {
      const response = await createAd(formDatasSubmitedObject);

      if (response) {
        alert('Nouveau annonce ajouté avec succès');
      } else {
        alert('Erreur lors de l\'ajout de l\'annonce');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de l\'ajout de l\'annonce');
    }
    alert(`Formulaire soumis`);
  };

  const renderTextInput = (name, label, type = 'text', required = false) => {
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
    <div className="flex justify-center">
      <Card className="w-full md:max-w-md md:mx-auto hover:bg-transparent">
        <h5 className="text-2xl font-bold tracking-tight text-blue-800 dark:text-white">
          Ajouter une annonce
        </h5>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Select name='category' id="category" required onChange={handleCategoryChange}>
            <option className="text-base font-medium text-blue-700" value=''>Catégorie</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </Select>

          <Select name='subcategory' id="subcategory" required>
            <option className="text-base font-medium text-blue-700" value=''>Sous-catégorie</option>
            {subCategories.map((subcategory, index) => (
              <option key={index} value={subcategory}>
                {subcategory}
              </option>
            ))}
          </Select>

          {renderTextInput('title', 'Titre', 'text', true)}

          <div className="relative">
            <Textarea id="description" aria-describedby="outlined_success_help" className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder="" data-testid="floating-label" name="description" required rows={4} />
            <label htmlFor="description" className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-gray-500 transition-transform duration-300 peer-placeholder-shown:top-1/4 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500">Description</label>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <span className="col-span-2">{renderTextInput('startdate', 'Début', 'date')}</span>
            {renderTextInput('startTime', 'Heure', 'time')}
          </div>

          <div className="grid grid-cols-3 gap-4">
            <span className="col-span-2">{renderTextInput('enddate', 'Fin', 'date')}</span>
            {renderTextInput('endTime', 'Heure', 'time')}
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
  );
}
