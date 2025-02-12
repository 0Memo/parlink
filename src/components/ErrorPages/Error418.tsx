"use client";
import { Link } from 'react-router-dom';
import '../../App.css';
import Teapot from '../../assets/teapot.png';
import { Button } from 'flowbite-react';

const Error418 = () => {
    return (
        <>
            <section className="smoke sm:-mb-56">
                <div className="mb-2 pt-5">
                    <ul>
                        <li>E</li>
                        <li>R</li>
                        <li>R</li>
                        <li>E</li>
                        <li>U</li>
                        <li>R</li>
                        <li>&nbsp;</li>
                        <li>4</li>
                        <li>1</li>
                        <li>8</li>
                    </ul>
                </div>

                <div className="teapot py-3">
                    <img src={Teapot} alt="i'm a teapot" />
                </div>

                <div className="text-center p-5">
                    <p>Je suis une théière, je ne suis pas là pour faire le café !</p>
                    <p>Ne partez pas sans avoir passez votre souris sur le titre, vous verrez ça vaut le coup !</p>
                    <Link to="/ads-grid" className="text-center flex justify-center">
                        <Button color="light" className="mt-6 sm:-mb-20 pt-2">
                            <svg className="w-5 h-5 text-gray-800 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd"/>
                            </svg>
                            Retour à la page d'accueil
                        </Button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Error418