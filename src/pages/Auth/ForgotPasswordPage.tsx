// Mot de passe oublié 
import './ForgotPasswordPage.css';


export default function ForgotPasswordPage() {
    return (
        <>
            <div className="md:flex " id="main-connexion">

                <div className="md:basis-4/12">
                    <img src="../../../public/images/logo.png" className="logo" alt="" />
                </div>

                <div className="md:basis-8/12">
                    <form>
                        {/* <h1> Changer de mot de passe </h1> <br /><br /> */}
                        {/* <h1 className="block mb-2  text-sm font-medium text-gray-900 dark:text-white"> Connectez-vous</h1> */}
                        <label htmlFor="text" className=" ms-2 text-left text-sm font-medium dark:text-white"> Changer de mot de passe  </label><br /><br />
                        <div className="mb-5">
                            <label htmlFor="newpassword" className="block mb-2 text-left text-sm font-medium  dark:text-white">Nouveau mot de passe</label>
                            <input type="text" id="newpassword" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm text-left font-medium  dark:text-white"> Confirmer le mot de passe</label>
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <button type="submit" className="text-white  bg-blue-400  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800">Valider</button> <br /> <br />
                        <div>
                            <input disabled checked id="disabled-checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                            <label htmlFor="disabled-checked-checkbox" className="ms-2 text-sm  text-blue-400 dark:text-blue-400">Votre mot de passe a été changé </label>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}