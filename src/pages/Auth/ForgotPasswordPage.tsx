// Mot de passe oublié 
import './ForgotPasswordPage.css';
import Logo from '../../assets/logo.png';


export default function ForgotPasswordPage() {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="md:basis-4/12">
                    <img src={Logo} className="scale-75 mx-0 sm:mx-10" alt="logo" />
                </div>
                <div className="md:basis-8/12">
                    <form>
                        <h1 className="font-titleTest text-3xl my-3"> Changer de mot de passe </h1><br/><br/> 
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