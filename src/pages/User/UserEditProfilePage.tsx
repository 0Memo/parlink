import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { IoIosSend } from "react-icons/io";
import { ProfileInterface } from "../../services/interfaces/Profile";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useParams } from "react-router-dom";
import UserAccountMenu from "../../components/User/UserAccountMenu";
import { getProfiles } from "../../services/api/userEditProfile";
import { useEffect, useState } from "react";

interface ProfileProp {
    handleSubmitProfile: (contactForm: ProfileInterface) => void;
}

export default function UserEditProfilePage(props: ProfileProp) {

    const { idProfile } = useParams();
    const [ profiles, setProfiles ] = useState<ProfileInterface | null>(null);

    useEffect(() => {
        const loadProfiles = async () => {
            const listProfile = await getProfiles();

            if (listProfile) {
                const selectedprofile = listProfile.find(profile => profile.id.toString() === idProfile);
                setProfiles(selectedprofile ? {
                    ...selectedprofile,
                } : null);
            }
            
        };
        loadProfiles();
    }, [idProfile]);

    const initialValues: ProfileInterface = {
        id: 0,
        file: "",
        firstname: "",
        lastname: "",
        password: "",
        birthDate: null,
        email: "",
        phone: "",
    };
    
    if (profiles) {
        initialValues.file = profiles.file;
        initialValues.firstname = profiles.firstname;
        initialValues.lastname = profiles.lastname;
        initialValues.password = profiles.password;
        initialValues.birthDate = profiles.birthDate;
        initialValues.email = profiles.email;
        initialValues.phone = profiles.phone;
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            file: Yup.string()
                            .min(3, "minimum 3 caractères")
                            .max(25, "maximum 25 caractères"),
            firstname: Yup.string()
                            .min(3, "minimum 3 caractères")
                            .max(25, "maximum 25 caractères"),
            lastname: Yup.string()
                            .min(3, "minimum 3 caractères")
                            .max(25, "maximum 25 caractères"),
            password: Yup.string()
                            .min(3, "minimum 3 caractères"),
            email: Yup.string()
                            .email(),
            phone: Yup.string()
                            .min(3, "minimum 10 caractères"),
        }),
        onSubmit: (values) => {
            const parsedValues: ProfileInterface = {
                ...profiles,
                ...values,
                birthDate: values.birthDate ? new Date(values.birthDate) : null,
                id: profiles?.id ?? 0
            };

            handleSubmitProfile(parsedValues);

            formik.resetForm();
            alert('Votre profil a bien été mis à jour!');
        },
    });

    const birthDateString: string | undefined = profiles?.birthDate ? profiles.birthDate.toISOString().substr(0, 10) : undefined;

    const handleSubmitProfile = (values: ProfileInterface): void => {
        if (profiles) {
            const updatedProfile: ProfileInterface = {
                ...profiles,
                ...values,
                id: profiles.id
            };
            props.handleSubmitProfile(updatedProfile);
        }
    };




    return (
        <>
            <UserAccountMenu />
            {
                !profiles ? (
                    <p className='font-bodyTest text-2xl my-32 italic text-orange-500'>Aucun profil n'existe avec l'id: {idProfile}</p>
                ) : (
                    <>
                        <div className="flex justify-center items-center font-bodyTest scale-110 sm:scale:100 mt-20 sm:mt-15">
                            <Card className="w-96 bg-gray-50 shadow-lg m-8">
                                <form onSubmit={formik.handleSubmit}>
                                
                                    <input
                                        type="file"
                                        id="picture"
                                        name="picture"
                                        className="mb-2 max-w-xs break-words"
                                        onChange={formik.handleChange}
                                        value={ formik.values.file }
                                    />
                                    <br />
                        
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="publicPicture" />
                                        <Label htmlFor="publicPicture">public</Label>
                                    </div>
                                    <br />
                                
                                    <TextInput
                                        id="firstname"
                                        type="text"
                                        name="firstname"
                                        className="mb-2"
                                        onChange={formik.handleChange}
                                        value={formik.values.firstname !== "" ? formik.values.firstname : profiles?.firstname}
                                        helperText={
                                            <>
                                            <span className="font-medium">{formik.errors.firstname}</span>
                                            </>
                                        }
                                    />
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="publicFirstname" />
                                        <Label htmlFor="publicFirstname">public</Label>
                                    </div>
                                    <br />
                                
                                    <TextInput
                                        id="lastname"
                                        type="text"
                                        name="lastname"
                                        className="mb-2"
                                        onChange={formik.handleChange}
                                        value={formik.values.lastname !== "" ? formik.values.lastname : profiles?.lastname}
                                        helperText={
                                            <>
                                            <span className="font-medium">{formik.errors.lastname}</span>
                                            </>
                                        }
                                    />
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="publicLastname" />
                                        <Label htmlFor="publicLastname">public</Label>
                                    </div>
                                    <br />
                        
                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        className="mb-2"
                                        onChange={formik.handleChange}
                                        value={formik.values.password !== "" ? formik.values.password : profiles?.password}
                                        helperText={
                                            <>
                                            <span className="font-medium">{formik.errors.password}</span>
                                            </>
                                        }
                                    />
                                    <br />
                        
                                    <TextInput
                                        id="birthDate"
                                        type="date"
                                        name="birthDate"
                                        className="mb-2"
                                        onChange={formik.handleChange}
                                        value={birthDateString}
                                        disabled
                                        helperText={
                                            <>
                                            <span className="font-medium">{formik.errors.birthDate}</span>
                                            </>
                                        }
                                    />
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="publicBirthDate" />
                                        <Label htmlFor="publicBirthDate">public</Label>
                                    </div>
                                    <br />
                                
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        className="mb-2"
                                        onChange={formik.handleChange}
                                        value={formik.values.email !== "" ? formik.values.email : profiles?.email}
                                        helperText={
                                            <>
                                            <span className="font-medium">{formik.errors.email}</span>
                                            </>
                                        }
                                    />
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="publicEmail" />
                                        <Label htmlFor="publicEmail">public</Label>
                                    </div>
                                    <br />
                        
                                    <TextInput
                                        id="phone"
                                        type="text"
                                        name="phone"
                                        className="mb-2"
                                        onChange={formik.handleChange}
                                        value={formik.values.phone !== "" ? formik.values.phone : profiles?.phone}
                                        helperText={
                                            <>
                                            <span className="font-medium">{formik.errors.phone}</span>
                                            </>
                                        }
                                    />
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="publicPhone" />
                                        <Label htmlFor="publicPhone">public</Label>
                                    </div>
                                    <br />
                                    <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-700 relative flex gap-2 p-1 mt-2 flex justify-center items-center'>
                                        <Button className="bg-blue-700">
                                        <span className="relative text-white m-1">Actualiser</span> <span>
                                            <IoIosSend className="relative text-white h-5 w-5" />
                                        </span>
                                        </Button>
                                        
                                    </span>
                                </form>
                            </Card>
                        </div>
                    </>
                )
            }

        </>
    )
}