import UserProfileModal from "./UserProfileModal";
import { Link } from "react-router-dom";
import { Card, ListGroup } from "flowbite-react";
import '../../App.css';

export default function UserLinks() {
    return (
        <>
            <div className="flex justify-center items-center scale-90 sm:scale-100">
                <Card className="w-96 bg-gray-50 shadow-lg m-24 scale-125 justify-center items-center">
                        <ListGroup className="userLinks w-80 ml-4 sm:ml-0">
                            <ListGroup.Item className="listGroupItem" >
                                <Link to="/new-ad" className="link">
                                    Déposer une annonce <span className="ml-20"> &gt;</span>
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="listGroupItem">
                                <Link to="/my-ads" className="link">
                                    Voir mes annonces <span className="ml-24"> &gt;</span>
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="listGroupItem">
                                <Link to="/my-subscriptions" className="link">
                                    Voir mes inscriptions <span className="ml-20"> &gt;</span>
                                </Link>
                            </ListGroup.Item>
                        </ListGroup>

                    <UserProfileModal />
                </Card>
            </div>
        </>
    )
}