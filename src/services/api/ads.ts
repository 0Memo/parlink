/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { useApi } from '../../hooks/useApi';

const api = useApi();

export async function getAds() {
    try {
        const response = await api.get('ad');
        const data = response.data;

        console.log('Annonces récupérées:', data);

        if (data && data.data && data.data.ads) {
            const ads = data.data.ads;

            return ads;
        } else {
            console.error('Format de réponse inattendu:', data);
            return [];
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des annonces:', error);
        return [];
    }
}

export async function getAdsByParams(search: string) {
    try {
        const {data} = await api.get(`ad/params?search=${search}`);
        return data
    } catch (error) {
        return {
            error: error
        }
    }
}

export async function getAdsByCategories(categoryName: string) {
    try {
        const response = await api.get(`ad/categories?categoryName=${categoryName}`);
        console.log(`Annonces récupérées pour la catégorie ${categoryName}:`, response.data);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la récupération des annonces pour la catégorie ${categoryName}:`, error);
        return [];
    }
}

export async function getCategories() {
    try {
        const response = await api.get('categories');
        console.log('Catégories récupérées:', response.data);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des catégories:', error);
        return [];
    }
}

export async function getSubCategories(categoryName: string) {
    try {
        const response = await api.get(`subCategories/${categoryName}`);
        console.log(`Sous-catégories récupérées pour la catégorie ${categoryName}:`, response.data);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la récupération des sous-catégories pour la catégorie ${categoryName}:`, error);
        return [];
    }
}

/*  export async function postSubscribedProfilesById(id: any) {
    try {
        const {data} = await api.post(`student/${id}`);
        return data
    } catch (error) {
        return {
            error: error
        }
    }
} */