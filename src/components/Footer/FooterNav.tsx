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
                <div className="h-full">
                    <div className='mt-52'>
                        <Footer className="w-full bg-gray-200 scale-100">                
                            <div className="w-full">
                                {/* Footer Links */}
                                <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
                                    <FooterLinkGroup col>
                                        <div className="flex flex-col items-start justify-start">                                 
                                            <FooterTitle title="Company" />
                                            <FooterLink href="/about" className='sm:hidden'>ParLink</FooterLink>
                                            <FooterLink href="/about" className='hidden sm:block'>À propos de ParLink</FooterLink>
                                            <FooterLink href="/sitemap">Plan du site</FooterLink>
                                        </div>
                                    </FooterLinkGroup>
                
                                    <FooterLinkGroup col>
                                        <div className="flex flex-col items-start justify-start">
                                            <FooterTitle title="help center" />
                                            <FooterLink href="/contact">
                                                <span>Nous contacter</span>
                                            </FooterLink>
                                            <FooterLink href="/cookies" className='sm:hidden'>Cookies</FooterLink>
                                            <FooterLink href="/cookies" className='hidden sm:block'>Paramètres des cookies</FooterLink>
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
                                            <FooterLink href="/mobile">Mobile</FooterLink>
                                            <FooterLink href="/desktop">Desktop</FooterLink>
                                        </div>
                                    </FooterLinkGroup>
                                </div>

                                {/* Footer copyright and social links */}
                                <div className="w-full bg-gray-300 px-4 pt-5 pb-5 sm:py-5 flex flex-col sm:flex-row items-center justify-between">
                                    <div className="flex space-x-10 sm:space-x-4 sm:mt-0 justify-center items-center mb-3 sm:mb-0">
                                        <FooterIcon href="https://github.com/valentina-alina" target="_blank" icon={BsGithub} />
                                        <FooterIcon href="https://www.linkedin.com/in/valentina-alina/" icon={BsLinkedin} />
                                        <p className="font-bodyTest text-gray-500 font-semibold">
                                            Valentina
                                        </p>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <FooterCopyright className='sm:text-xl' href="#" by="AquilDev™, Inc. | Tous droits reservés" year={currentYear} />
                                        <a href="javascript:window.print()" className="sm:ml-2 mt-0.5 text-sm sm:text-lg text-gray-700 sm:text-gray-400 sm:font-semibold">Imprimer la page</a>
                                    </div>
                                    <div className="flex space-x-10 sm:space-x-4 mt-3 sm:mt-0 justify-center items-center mb-3 sm:mb-0">
                                        <FooterIcon href="https://github.com/0Memo" target="_blank" icon={BsGithub} />
                                        <FooterIcon href="https://www.linkedin.com/in/guillaume-mehats/" target="_blank" icon={BsLinkedin} />
                                        <p className="font-bodyTest text-gray-500 font-semibold">
                                            Guillermo
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Footer>
                    </div>
                </div>
            </div>

            {/* Mobile footer navigation */}
            <div className="fixed lg:hidden bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 tablet p-3 scale-110">
                <div className="grid h-full max-w-lg grid-cols-5 font-medium">
                    {navigationItems.map((item, index) => (
                        <Link key={index} to={item.path}>
                            <button type="button" className="inline-flex flex-col items-center justify-center text-gray-800 dark:text-white hover:text-blue-800 dark:hover:text-blue-800">
                                {item.icon}
                            </button>
                        </Link>
                    ))}
                    <MegaMenu.Dropdown
                        toggle={
                            <FaRegUserCircle  className={cssClasIcons} />
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

                                <ListGroup.Item>
                                    <Link to="/users-handling">
                                        Gestion utilisateurs
                                    </Link>
                                </ListGroup.Item>
                                
                                <ListGroup.Item>
                                    <Link to="/my-account">
                                        Fermeture de compte
                                    </Link>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Link to="#" onClick={handleLogout} >
                                        Déconnexion
                                    </Link> 
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </MegaMenu.Dropdown>
                </div>
            </div>
        </div>
    );
}