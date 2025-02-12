import { Link } from 'react-router-dom';
import { IoArrowUndoOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
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
    const currentYear = new Date().getFullYear();

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        localStorage.removeItem('access_token');
        localStorage.removeItem('isConnected');
        location.href = "/";
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Main content section */}
            <div className="flex-grow">
                {/* Your page content goes here */}
            </div>

            {/* Footer section */}
            <Footer className="w-full bg-gray-200 mt-auto">                
                <div className="w-full">
                    <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
                        <FooterLinkGroup col>
                            <FooterTitle title="Company" />
                            <FooterLink href="/about">À propos de ParLink</FooterLink>
                            <FooterLink href="/sitemap">Plan du site</FooterLink>
                        </FooterLinkGroup>
                        
                        <FooterLinkGroup col>
                            <FooterTitle title="Help Center" />
                            <FooterLink href="/contact">Nous contacter</FooterLink>
                            <FooterLink href="/cookies">Paramètres des cookies</FooterLink>
                        </FooterLinkGroup>

                        <FooterLinkGroup col>
                            <FooterTitle title="Legal" />
                            <FooterLink href="/legal">Mentions Légales</FooterLink>
                            <FooterLink href="/confidentiality">Politique de confidentialité</FooterLink>
                        </FooterLinkGroup>

                        <FooterLinkGroup col>
                            <FooterTitle title="Download" />
                            <FooterLink href="/mobile">Mobile</FooterLink>
                            <FooterLink href="/desktop">Desktop</FooterLink>
                        </FooterLinkGroup>
                    </div>

                    <div className="w-full bg-gray-300 px-4 py-5 flex flex-col sm:flex-row items-center justify-between">
                        <div className="flex space-x-10 sm:space-x-4 justify-center items-center mb-3 sm:mb-0">
                            <FooterIcon href="https://github.com/valentina-alina" target="_blank" icon={BsGithub} />
                            <FooterIcon href="https://www.linkedin.com/in/valentina-alina/" icon={BsLinkedin} />
                            <p className="text-gray-500 font-semibold">Valentina</p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <FooterCopyright href="#" by="AquilDev™, Inc. | Tous droits reservés" year={currentYear} />
                            <a href="javascript:window.print()" className="ml-2 text-sm sm:text-lg text-gray-700">Imprimer la page</a>
                        </div>
                        <div className="flex space-x-10 sm:space-x-4 justify-center items-center">
                            <FooterIcon href="https://github.com/0Memo" target="_blank" icon={BsGithub} />
                            <FooterIcon href="https://www.linkedin.com/in/guillaume-mehats/" target="_blank" icon={BsLinkedin} />
                            <p className="text-gray-500 font-semibold">Guillermo</p>
                        </div>
                    </div>
                </div>
            </Footer>

            {/* Mobile footer navigation */}
            <div className="fixed lg:hidden bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 p-3">
                <div className="grid h-full max-w-lg grid-cols-5 font-medium">
                    {navigationItems.map((item, index) => (
                        <Link key={index} to={item.path}>
                            <button type="button" className="inline-flex flex-col items-center justify-center text-gray-800 dark:text-white hover:text-blue-800">
                                {item.icon}
                            </button>
                        </Link>
                    ))}
                    <MegaMenu.Dropdown toggle={<FaRegUserCircle className={cssClasIcons} />}>
                        <div className="flex justify-center">
                            <ListGroup className="w-48">
                                <ListGroup.Item>
                                    <Link to="/my-ads">Mes annonces</Link>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Link to="/my-subscriptions">Mes inscriptions</Link>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Link to="/users-handling">Gestion utilisateurs</Link>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Link to="/my-account">Fermeture de compte</Link>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Link to="#" onClick={handleLogout}>Déconnexion</Link> 
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </MegaMenu.Dropdown>
                </div>
            </div>
        </div>
    );
}