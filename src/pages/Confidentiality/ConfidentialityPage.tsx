"use client";
import { Card } from "flowbite-react";

export default function ConfidentialityPage() {
    
    return (
        <div>

            <div className="flex justify-center items-center scale-125 sm:scale-100 my-96 sm:my-0">
                <Card className="w-80 sm:w-96 my-28 sm:my-0">
                    <div className="mb-4 flex items-center justify-center">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Politique de confidentialité</h5>
                    </div>
                    
                    <div className="flow-root">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xl font-bold text-gray-900 dark:text-white mb-6">Qui sommes-nous ?</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">ParLink est un site destiné à mettre en lien les parents dans un esprti d'entraide et de partage.</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">L’adresse de notre site Web est : https://www.parlink.fr.</p>
                                    </div>
                                    {/* <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div> */}
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xl font-bold text-gray-900 dark:text-white mb-6">Utilisations des données personnelles collectées</p>
                                        <p className="text-xl font-medium text-gray-900 dark:text-white mb-6">Commentaires</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Quand vous laissez un commentaire sur notre site web, nous collectons les données inscrites dans le formulaire de commentaire. Nous collectons également votre adresse IP et l’agent utilisateur de votre navigateur, pour nous aider à la détection des commentaires indésirables.</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Une chaîne anonymisée créée à partir de votre adresse de messagerie (également appelée hash) peut être envoyée au service Gravatar pour vérifier si vous utilisez ce dernier. Vous trouverez les clauses de confidentialité du service Gravatar ici : https://automattic.com/privacy/. Dès que nous avons validé votre commentaire, vous verrez alors votre photo de profil sera visible publiquement à coté de votre commentaire.</p>
                                        <p className="text-xl font-medium text-gray-900 dark:text-white mb-6">Médias</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Si vous êtes un utilisateur ou une utilisatrice enregistré(e), et que vous téléversez des images sur le site web, nous vous conseillons d’éviter de téléverser des images contenant des données EXIF de coordonnées GPS. Les visiteurs de votre site web peuvent télécharger et extraire des données de localisation depuis ces images.</p>
                                        <p className="text-xl font-medium text-gray-900 dark:text-white mb-6">Formulaires de contact</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Le formulaire de contact est disponible à l’adresse suivante : https://www.parlink.fr/contact/ </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Il ne stocke aucune information en base de données.</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">L’adresse de contact de ParLink est la seule destinataire des informations transmises.</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Nous n’effectuons aucune statistique à partir de vos données personnelles, ni ne les revendons vos données personnelles.</p>
                                        <p className="text-xl font-medium text-gray-900 dark:text-white mb-6">Cookies</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Si vous déposez un commentaire sur notre site, nous vous proposerons d’enregistrer votre nom, adresse de messagerie et site web dans des cookies. C’est uniquement pour votre confort, afin de ne pas avoir à saisir ces informations si vous déposez un autre commentaire plus tard. Ces cookies expirent au bout d’un an.</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Si vous vous rendez sur la page de connexion, nous créerons un cookie temporaire afin de déterminer si votre navigateur accepte les cookies. Il ne contient pas de données personnelles et sera supprimé automatiquement à la fermeture de votre navigateur.</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Lorsque vous vous connecterez, nous mettrons en place un certain nombre de cookies pour enregistrer vos informations de connexion et vos préférences d’écran. Un cookie de connexion a une durée de vie de deux jours, et un cookie d’option d’écran d’un an. Si vous cochez « Se souvenir de moi », nous conserverons votre cookie de connexion pendant deux semaines. Si vous vous déconnectez de votre compte, nous effacerons alors le cookie de connexion.</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Lorsque vous modifiez ou éditez une publication, un cookie supplémentaire sera enregistré dans votre navigateur. Ce cookie ne comprend aucune donnée personnelle. Il indique simplement l’ID de la publication que vous venez de modifier. Il expire au bout d’un jour.</p>
                                        <p className="text-xl font-medium text-gray-900 dark:text-white mb-6">Contenu embarqué depuis d'autres sites</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Les articles de ce site peuvent inclure des contenus intégrés (par exemple des vidéos, images, articles…). Le contenu intégré depuis d’autres sites se comporte de la même manière que si le visiteur se rendait sur cet autre site.</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Ces sites web pourraient collecter des données sur vous, utiliser des cookies, embarquer des outils de suivis tiers. Ils pourraient également suivre vos interactions avec ces contenus embarqués si vous disposez d’un compte connecté sur leur site web.</p>
                                        <p className="text-xl font-medium text-gray-900 dark:text-white mb-6">Statistiques et mesures d'audience</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">ParLink utilise l’outil Google Analytics afin d’établir des statistiques et mesures d’audience.</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Nous rendons ces données personnelles anonymes, et nous ne les utilisons pas à d’autres fins (revente, etc).</p>
                                    </div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xl font-bold text-gray-900 dark:text-white mb-6">Utilisation et transmission de vos données personnelles</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Si vous demandez une réinitialisation de mot de passe, votre adresse IP sera incluse dans l’e-mail de réinitialisation.</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Nous utilisons le service MailerLite, ce dernier se conforme aux exigences européennes en matière de protection des données (cf RGPD).</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">ParLink utilise votre adresse mail, à travers des envois d’offres promotionnelles, de contenus autour de la thématique du site.</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Nous ne distribuons à aucun moment vos données à un tiers.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xl font-bold text-gray-900 dark:text-white mb-6">Durées de stockage de vos données</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Si vous laissez un commentaire, nous conservons le commentaire et ses métadonnées indéfiniment. Nous pouvons ainsi reconnaître et approuver automatiquement les commentaires suivants, au lieu de les laisser dans la file de modération.</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Pour les utilisateurs et utilisatrices qui s’inscrivent sur notre site (si cela est possible), nous stockons également les données personnelles indiquées dans leur profil. Tous les utilisateurs et utilisatrices peuvent voir, modifier ou supprimer leurs informations personnelles à tout moment (à l’exception de leur nom d’utilisateur/ice). Les gestionnaires du site peuvent aussi voir et modifier ces informations.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xl font-bold text-gray-900 dark:text-white mb-6">Les droits que vous avez sur vos données</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Vous pouvez demander à recevoir un fichier contenant toutes les données personnelles que nous possédons à votre sujet, incluant également celles que vous nous avez fournies. Vous pouvez également demander la suppression des données personnelles vous concernant. Cela ne prend pas en compte les données stockées à des fins administratives, légales ou pour des raisons de sécurité.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xl font-bold text-gray-900 dark:text-white mb-6">Transmissions de vos données personnelles</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Nous pourrons vérifier les commentaires des visiteurs, à l’aide d’un service automatisé de détection des commentaires indésirables.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xl font-bold text-gray-900 dark:text-white mb-6">Informations de contact</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">ParLink</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">contact.parlink@gmail.com</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Card>
            </div>

        </div>
    )
}