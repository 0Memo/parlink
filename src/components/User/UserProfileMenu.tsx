import { Button, ButtonGroup } from "flowbite-react";
import { Link } from "react-router-dom";
import { HiAdjustments, HiUserCircle } from "react-icons/hi";

export default function UserProfileMenu() {
    return (
        <>
            <ButtonGroup className="flex justify-center items-center ml-5 sm:ml-0 sm:my-40" outline={false} pill={false}>
                <Button color="gray" className="sm:w-96">
                    <HiUserCircle className="mr-3 h-4 w-4" />
                    <Link to="/edit-my-profile">
                        À propos de vous
                    </Link>
                </Button>
                <Button color="gray" className="sm:w-96 bg-blue-700 text-white -z-10" disabled>
                    <HiAdjustments className="mr-3 h-4 w-4" />
                    Mon compte
                </Button>
            </ButtonGroup>
        </>
    )
}