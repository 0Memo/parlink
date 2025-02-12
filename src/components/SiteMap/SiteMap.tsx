"use client";
import { Link } from 'react-router-dom';
import '../../App.css';
import { MegaMenu } from 'flowbite-react';

const SiteMap = () => {
    return (
        <>
            <h1 className="text-center text-4xl py-4">
                Plan du site
            </h1>
            <div className="separator"></div>
            <MegaMenu>
                    <ul className="mx-auto mt-6 inline-grid max-w-screen-xl px-4 py-5 mb-60 sm:mb-0 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 md:px-6 gap-6">
                        <li>
                            <Link to="/ads-grid" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <svg
                                        className="w-6 h-6 text-gray-800 dark:text-white scale-125 mt-9"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.617 2.076a1 1 0 0 1 1.09.217L8 3.586l1.293-1.293a1 1 0 0 1 1.414 0L12 3.586l1.293-1.293a1 1 0 0 1 1.414 0L16 3.586l1.293-1.293A1 1 0 0 1 19 3v18a1 1 0 0 1-1.707.707L16 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L12 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L8 20.414l-1.293 1.293A1 1 0 0 1 5 21V3a1 1 0 0 1 .617-.924ZM9 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-md text-[#263D69] hover:text-blue-900 dark:text-blue-900">
                                        Accueil
                                    </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/calendar" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <svg
                                        className="w-6 h-6 text-gray-800 dark:text-white scale-125 mt-9 hover:text-blue-800 dark:hover:text-blue-800"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-md text-[#263D69] hover:text-blue-900 dark:text-blue-900">
                                        Calendrier
                                    </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/files" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <svg
                                        className="w-6 h-6 text-gray-800 dark:text-white scale-125 mt-9 hover:text-blue-800 dark:hover:text-blue-800"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path fillRule="evenodd" d="M3 6a2 2 0 0 1 2-2h5.532a2 2 0 0 1 1.536.72l1.9 2.28H3V6Zm0 3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9H3Z" clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-md text-[#263D69] hover:text-blue-900 dark:text-blue-900">
                                        Fichiers
                                    </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/map" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white scale-125 mt-9 hover:text-blue-800 dark:hover:text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-md text-[#263D69] hover:text-blue-900 dark:text-blue-900">
                                        Carte
                                    </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/chat" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <svg
                                            className="w-6 h-6 text-gray-800 dark:text-white scale-125 mt-9 hover:text-blue-800 dark:hover:text-blue-800"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                        <path fillRule="evenodd" d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6.616l-2.88 2.592C8.537 20.461 7 19.776 7 18.477V17H5a2 2 0 0 1-2-2V6Zm4 2a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H7Zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm-8 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Zm5 0a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z" clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-md text-[#263D69] hover:text-blue-900 dark:text-blue-900">
                                        Chat
                                    </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white scale-125 mt-9 hover:text-blue-800 dark:hover:text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"/>
                                    </svg>
                                    <span className="text-md text-[#263D69] hover:text-blue-900 dark:text-blue-900">
                                        À propos
                                    </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white scale-125 mt-9 hover:text-blue-800 dark:hover:text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M8 7V2.221a2 2 0 0 0-.5.365L3.586 6.5a2 2 0 0 0-.365.5H8Zm2 0V2h7a2 2 0 0 1 2 2v.126a5.087 5.087 0 0 0-4.74 1.368v.001l-6.642 6.642a3 3 0 0 0-.82 1.532l-.74 3.692a3 3 0 0 0 3.53 3.53l3.694-.738a3 3 0 0 0 1.532-.82L19 15.149V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z" clip-rule="evenodd"/>
                                        <path fill-rule="evenodd" d="M17.447 8.08a1.087 1.087 0 0 1 1.187.238l.002.001a1.088 1.088 0 0 1 0 1.539l-.377.377-1.54-1.542.373-.374.002-.001c.1-.102.22-.182.353-.237Zm-2.143 2.027-4.644 4.644-.385 1.924 1.925-.385 4.644-4.642-1.54-1.54Zm2.56-4.11a3.087 3.087 0 0 0-2.187.909l-6.645 6.645a1 1 0 0 0-.274.51l-.739 3.693a1 1 0 0 0 1.177 1.176l3.693-.738a1 1 0 0 0 .51-.274l6.65-6.646a3.088 3.088 0 0 0-2.185-5.275Z" clip-rule="evenodd"/>
                                    </svg>
                                    <span className="text-md text-[#263D69] hover:text-blue-900 dark:text-blue-900">
                                        Nous contacter
                                    </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/legal" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white scale-125 mt-9 hover:text-blue-800 dark:hover:text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Z"/>
                                        <path fill-rule="evenodd" d="M11 7V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm4.707 5.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
                                    </svg>
                                    <span className="text-md text-[#263D69] hover:text-blue-900 dark:text-blue-900">
                                        Mentions Légales
                                    </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/confidentiality" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white scale-125 mt-9 hover:text-blue-800 dark:hover:text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v5.703l-4.311-1.58a2 2 0 0 0-1.377 0l-5 1.832A2 2 0 0 0 8 11.861c.03 2.134.582 4.228 1.607 6.106.848 1.555 2 2.924 3.382 4.033H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z" clip-rule="evenodd"/>
                                        <path fill-rule="evenodd" d="M15.345 9.061a1 1 0 0 0-.689 0l-5 1.833a1 1 0 0 0-.656.953c.028 1.97.538 3.905 1.485 5.641a12.425 12.425 0 0 0 3.956 4.34 1 1 0 0 0 1.12 0 12.426 12.426 0 0 0 3.954-4.34A12.14 12.14 0 0 0 21 11.848a1 1 0 0 0-.656-.954l-5-1.833ZM15 19.765a10.401 10.401 0 0 0 2.76-3.235 10.15 10.15 0 0 0 1.206-4.011L15 11.065v8.7Z" clip-rule="evenodd"/>
                                    </svg>
                                    <span className="text-md text-[#263D69] hover:text-blue-900 dark:text-blue-900">
                                        Confidentialité
                                    </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/404" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white scale-125 mt-9 hover:text-blue-800 dark:hover:text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"/>
                                    </svg>
                                    <span className="text-md text-[#263D69] hover:text-blue-900 dark:text-blue-900">
                                        Erreur 404
                                    </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/418" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white scale-125 mt-9 hover:text-blue-800 dark:hover:text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"/>
                                    </svg>
                                    <span className="text-md text-[#263D69] hover:text-blue-900 dark:text-blue-900">
                                        Erreur 418
                                    </span>
                            </Link>
                        </li>
                    </ul>
            </MegaMenu>
        </>
    )
}

export default SiteMap