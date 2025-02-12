"use client";

const SiteMap = () => {
    return (
        <>
            <section className="container siteMap my-5">
            <h2 className="text-center">Plan du site</h2>
            <div className="separator"></div>
            <div className="row flex-column flex-md-row text-center pt-5 mt-5">
                <div className="col">
                    <ul>
                        <li className="siteMapTitle"><i className="fas fa-hotel"></i> HOTEL
                            <ul className="ml-4">
                                <li><a href="index.html">Accueil</a></li>
                                <li><a href="qui_sommes_nous.html">Qui sommes-nous?</a></li>
                                <li><a href="qui_sommes_nous.html#recrutement">Recrutement</a></li>
                                <li><a href="contact.html">Contact</a></li>
                                <li><a href="qui_sommes_nous.html#access">Accès</a></li>
                                <li><a href="evenements.html">Évènements</a></li>
                                <li><a href="presse.html">Presse</a></li>
                                <li><a href="avis.html">Avis</a></li>
                            </ul>
                        </li>          
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li className="siteMapTitle"><i className="fas fa-bed"></i> CHAMBRES
                            <ul className="ml-4">
                                <li><a href="rooms.html">Les Chambres</a></li>
                                <li><a href="rooms-classNameic.html">ClassNameique</a></li>
                                <li><a href="rooms-comfort.html">Confort</a></li>
                                <li><a href="rooms-deluxe.html">Deluxe</a></li>
                                <li><a href="rooms-suite.html">Les Suites</a></li>
                            </ul>
                        </li>          
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li className="siteMapTitle"><i className="fas fa-utensils"></i> RESTAURANT
                            <ul className="ml-4">
                                <li><a href="restaurant.html">Le Restaurant</a></li>
                                <li><a href="restaurant.html#brasserie">Carte Brasserie</a></li>
                                <li><a href="restaurant.html#degustation">Carte Dégustation</a></li>
                                <li><a href="restaurant.html#menuSoir">Carte Restaurant</a></li>
                            </ul>
                        </li>          
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li className="siteMapTitle"><i className="fas fa-spa"></i> SPA
                            <ul className="ml-4">
                                <li><a href="spa.html">Le Spa et nos soins</a></li>
                                <li><a href="spa.html#detente">Soin Détente</a></li>
                                <li><a href="spa.html#decouverte">Soin Découverte</a></li>
                                <li><a href="spa.html#relaxant">Soin Relaxant</a></li>
                                <li><a href="spa.html#plaisir">Soin Plaisir</a></li>
                                <li><a href="spa.html#evasion">Soin Évasion</a></li>
                            </ul>
                        </li>          
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li className="siteMapTitle"><i className="fas fa-link"></i> LIENS
                            <ul className="ml-4">
                                <li><a href="sitemap.html">Plan du site</a></li>
                                <li><a href="mentions_legales.html">Mentions Légales</a></li>
                                <li><a href="cgv.html">CGV</a></li>
                                <li><a href="reservation.html">Réservation</a></li>
                                <li><a href="error404.html">Error 404</a></li>
                                <li><a href="error418.html">Error 418</a></li>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Tweeter</a></li>
                                <li><a href="#">Pinterest</a></li>
                            </ul>
                        </li>          
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}

export default SiteMap