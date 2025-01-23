"use client";
import { ImWarning } from "react-icons/im";
import '../../App.css';

const UnderConstruction = () => {

    return (
        <>
            <div className="container ml-auto mr-auto px-0 py-2.5">
                <h1 className="status-reason flex justify-center text-white font-bold text-6xl leading-4 px-0 py-6 tape -mb-40">
                    <span className="gap-6">
                        <ImWarning className="-mt-6" />
                        En Construction
                    </span>
                </h1>
            </div>
            <section className="additional-info bg-blue-700 text-white font-h1 relative overflow-hidden text-center border-t-2 border-white block p-0 m-0 top-[223px] h-[400px]">
                <div className="container">
                    <div className="additional-info-items p-5 min-h-48">
                    <h2 className="info-heading text-[190%] font-bold w-full break-all">
                        Bonne nouvelle! nous travaillons sur ce site.
                    </h2>
                    <div className="reason-text mx-0 my-5">
                        Retrouvez bientôt ici une nouvelle page et de nouvelles fonctionnalités.
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UnderConstruction