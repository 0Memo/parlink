"use client";
import '../../App.css';

const Error404 = () => {
    return (
        <>
            <section className="container-fluid smoke">
            <div className="mb-5">
                <ul>
                    <li>E</li>
                    <li>R</li>
                    <li>R</li>
                    <li>O</li>
                    <li>R</li>
                    <li>&nbsp;</li>
                    <li>4</li>
                    <li>0</li>
                    <li>4</li>
                </ul>
            </div>

            <div className="text-center p-5">
                <p>Oops..! La page que vous cherchez n'existe pas.</p>
                <p>Ne partez pas sans avoir passez votre souris sur le titre, vous verrez ça vaut le coup !</p>
                <button type="button" className="btn btn-outline-secondary text-center my-3">Retour à la page d'accueil</button>
            </div>
        </section>
        </>
    )
}

export default Error404