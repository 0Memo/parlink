import { Button, ButtonGroup } from "flowbite-react";
import { Link } from "react-router-dom";
import { HiAdjustments, HiUserCircle } from "react-icons/hi";

export default function UserProfileMenu() {
    return (
        <>
            <ButtonGroup className="flex justify-center items-center mr-5 sm:mr-0 sm:my-40" outline={false} pill={false}>
                <Button color="gray" className="sm:w-96 bg-blue-700 text-white" disabled>
                    <HiUserCircle className="mr-3 h-4 w-4" />
                        À propos de vous
                </Button>
                <Link to="/my-account">
                    <Button color="gray" className="sm:w-96 -z-10">
                        <HiAdjustments className="mr-3 h-4 w-4" />
                            Mon compte
                    </Button>
                </Link>
            </ButtonGroup>
        </>
    )
}