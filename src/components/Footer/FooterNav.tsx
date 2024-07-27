import { Link } from 'react-router-dom';
import { IoArrowUndoOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { ListGroup, MegaMenu } from "flowbite-react";

const cssClasIcons = "w-[35px] h-[40px]  ";
const navigationItems = [
    { path: '/', label: 'Retour', icon: <IoArrowUndoOutline className={cssClasIcons} /> },
    { path: '/ads-grid', label: 'Accueil', icon: <AiOutlineHome className={cssClasIcons} /> },
    { path: '/new-ad', label: 'Ajouter', icon: <IoMdAddCircle className={cssClasIcons} /> },
    { path: '/chat', label: 'Chat', icon: <IoChatboxEllipsesOutline className={cssClasIcons} /> },
    // FIXME: gerer la gestion des utilisateurs+ la page en mode mobile dans le cas ou pas
    // { path: '/gestion-utilisateurs', label: 'Compte', icon: <FaRegUserCircle className={cssClasIcons} /> },
];

export default function FooterNav() {
    return (
        <>
            <Footer className="w-full bg-gray-200 mt-28 mb-18 sm:mt-48 scale-125 sm:scale-100 sm:sticky sm:relative sm:-bottom-8">                
                <div className="w-full">
                    <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
                        <FooterLinkGroup col>
                            <div className="flex flex-col items-start justify-start">                                
                                <FooterTitle title="Company" />
                                <FooterLink href="#" className='sm:hidden'>ParLink</FooterLink>
                                <FooterLink href="#" className='hidden sm:block'>À propos de ParLink</FooterLink>
                                <FooterLink href="#">Plan du site</FooterLink>
                            </div>
                        </FooterLinkGroup>

                        <FooterLinkGroup col>
                            <div className="flex flex-col items-start justify-start">
                                <FooterTitle title="help center" />
                                <FooterLink href="/contact">
                                    <span>Nous contacter</span>
                                </FooterLink>
                                <FooterLink href="#" className='sm:hidden'>Cookies</FooterLink>
                                <FooterLink href="#" className='hidden sm:block'>Paramètres des cookies</FooterLink>
                            </div>
                        </FooterLinkGroup>

                        <FooterLinkGroup col>
                            <div className="flex flex-col items-start justify-start">
                                <FooterTitle title="legal" />
                                <FooterLink href="/legal" className='sm:hidden'>Mentions</FooterLink>
                                <FooterLink href="/legal" className='hidden sm:block'>Mentions Légales</FooterLink>
                                <FooterLink href="/confidentiality" className='sm:hidden'>
                                    Confidentialité
                                </FooterLink>
                                <FooterLink href="/confidentiality" className='hidden sm:block'>
                                    Politique de confidentialité
                                </FooterLink>
                            </div>
                        </FooterLinkGroup>

                        <FooterLinkGroup col>
                            <div className="flex flex-col items-start justify-start">
                                <FooterTitle title="download" />
                                <FooterLink href="#">Mobile</FooterLink>
                                <FooterLink href="#">Desktop</FooterLink>
                            </div>
                        </FooterLinkGroup>
                    </div>
                    <div className="w-full bg-gray-300 px-4 pt-5 pb-24 sm:py-5 flex flex-col sm:flex-row items-center justify-between">
                        <div className="flex space-x-10 sm:space-x-4 sm:mt-0 justify-center items-center mb-3 sm:mb-0">
                            <FooterIcon href="#" icon={BsFacebook} />
                            <FooterIcon href="#" icon={BsInstagram} />
                            <FooterIcon href="#" icon={BsTwitter} />
                            <FooterIcon href="#" icon={BsGithub} />
                            <FooterIcon href="#" icon={BsDribbble} />
                        </div>
                        <div className='flex justify-center items-center'>
                            <FooterCopyright className='sm:text-xl' href="#" by="AquilDev™, Inc. | Tous droits reservés" year={2024} />
                        </div>
                    </div>
                </div>
            </Footer>
            <div className="fixed lg:hidden bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 tablet p-3 scale-110">
                
                <div className="grid h-full max-w-lg grid-cols-5 font-medium">

                    {navigationItems.map((item, index) => (
                        <Link key={index} to={item.path}>
                        <button type="button" className="inline-flex flex-col items-center justify-center text-gray-800 dark:text-white hover:text-blue-800 dark:hover:text-blue-800">
                            {item.icon}
                            {/* <div >{item.label}</div> */}
                        </button>
                        </Link>
                    ))}
                    <MegaMenu.Dropdown
                        toggle={
                            <FaRegUserCircle  className={cssClasIcons} 
                            />
                        } 
                    >
                        <div className="flex justify-center">
                            <ListGroup className="w-48">
                                <ListGroup.Item>
                                    <Link to="/my-ads">
                                        Mes annonces
                                    </Link>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                <Link to="/my-subscriptions">
                                        Mes inscriptions
                                    </Link>
                                </ListGroup.Item>

                                {/* FIXME: gerer le role admin: visible si role = admin dans token */}
                                {/* {isAdmin && ( */}
                                    <ListGroup.Item>
                                    <Link to="/users-handling">
                                        Gestion utilisateurs
                                    </Link>
                                </ListGroup.Item>
                            {/* // ) } */}
                                
                                <ListGroup.Item>
                                <Link to="/my-account">
                                        Fermeture de compte
                                    </Link>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <p>
                                        Déconnexion
                                    </p>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </MegaMenu.Dropdown>
                </div>
            </div>
        </>
    );
}