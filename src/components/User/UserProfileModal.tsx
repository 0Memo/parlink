import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function UserProfileModal() {

    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-700 relative mt-4 w-75 sm:w-full p-1 ml-7 sm:ml-0 flex justify-center items-center'>

                <Button className="bg-blue-700" onClick={() => setOpenModal(true)}>
                    <span className="relative text-white">Fermer mon compte</span>
                </Button>
            </span>

            <Modal className="mr-3 sm:mr-0 font-bodyTest" dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Fermeture de compte</Modal.Header>
                <Modal.Body>
                    <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <div className="space-y-6">
                        <h3 className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-center">
                        Êtes-vous sûr de vouloir fermer votre compte ?
                        </h3>
                    </div>
                    <div className="flex justify-center gap-4 mt-4">
                        <Button
                            color="success"
                            onClick={() => setOpenModal(false)}
                        >
                            Oui
                        </Button>
                        <Button
                            color="failure"
                            onClick={() => setOpenModal(false)}
                        >
                            Non
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}