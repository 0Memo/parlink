import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import Logo from '../../assets/parlink.png';

export default function AboutPage() {
    return (
        <div className="flex flex-col justify-center items-center p-2">
            <Card className="w-full p-6 shadow-lg bg-white rounded-2xl">
            
            {/* Logo en haut à gauche */}
            <div className="flex justify-start w-full">
                <img src={Logo} alt="logo ParLink" className="ml-8 h-10 sm:h-12 scale-150" />
            </div>
    
            {/* Contenu principal */}
            <div className="text-center w-full">
                <h1 className="text-2xl font-bold tracking-tight text-blue-800  mb-10">
                La plateforme de connexion entre parents d’élèves
                </h1>
                <p className="text-justify mb-4">
                Parlink facilite la communication et la solidarité entre les parents d’une même école.
                Organisez facilement la vie scolaire de vos enfants en échangeant avec d’autres parents.
                </p>
                <ul className="list-disc text-justify" >
                <li>
                    <strong>Annonces collaboratives :</strong> covoiturage, sorties, cours de soutien, ateliers, garde d’enfants, échange de devoirs.
                </li>
                <li>
                    <strong>Messagerie et groupes privés :</strong> chat en temps réel, création de groupes par classe ou pour des besoins spécifiques.
                </li>
                </ul>
                <br />
                <p className="text-justify mb-4">
                Avec <strong>Parlink</strong>, bénéficiez d’un espace sécurisé et convivial dédié aux parents,
                pour mieux s’entraider et accompagner la scolarité des enfants.
                </p>
    
                {/* Boutons Connexion et Création de compte */}
                <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
                <Link to="/login" className="px-6 py-2 text-blue-800  border border-blue-700 rounded-lg hover:bg-blue-100 transition">
                <strong>Se connecter</strong>
                </Link>
                <Link to="/createAdmin" className="px-6 py-2 text-blue-800  border border-blue-700 rounded-lg hover:bg-blue-100 transition ">
                <strong>Créer un compte Client</strong> 
                </Link>
                </div>
            </div>
            </Card>
    
            {/* <div className="h-40"></div> */}
        </div>
        );
    }