import { Button, Card, TextInput, Textarea } from 'flowbite-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { IoIosSend } from "react-icons/io";
import { ContactInterface } from '../../services/interfaces/Contact';
interface ContactFormProp {
    handleSubmitContactForm: (contactForm: ContactInterface) => void;
}


export default function ContactPage(props: ContactFormProp) {

    const handleSubmitContactForm = props.handleSubmitContactForm;

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            topic: "",
            message: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                            .min(3, "minimum 3 caractères")
                            .max(25, "maximum 25 caractères")
                            .required("Le nom est obligatoire"),
            lastName: Yup.string()
                            .min(3, "minimum 3 caractères")
                            .max(25, "maximum 25 caractères")
                            .required("Le nom est obligatoire"),
            topic: Yup.string()
                            .min(3, "minimum 3 caractères")
                            .max(25, "maximum 25 caractères")
                            .required("Le sujet est obligatoire"),
            message: Yup.string()
                            .min(3, "minimum 3 caractères")
                            .required("Le message est obligatoire"),
        }),
        onSubmit: (values) => {
            handleSubmitContactForm(
                {
                    ...values,
                }
            );
            formik.resetForm();
            alert('Votre message a bien été envoyé!');
        },
    });

    return (
        <>
            <div>
                <label htmlFor="firstName"><h1 className="text-2xl text-center mb-5 font-titleTest">Nous contacter</h1></label>
                


                <div className="flex justify-center items-center scale-110 sm:scale-100">
                    <Card className="w-96 bg-gray-50 shadow-lg">
                        <form id="contactForm" onSubmit={formik.handleSubmit}>
                        
                            <TextInput
                                id="firstName"
                                type="text"
                                name="firstName"
                                className="font-bodyTest"
                                placeholder="Votre prénom..."
                                onChange={formik.handleChange}
                                value={ formik.values.firstName }
                                helperText={
                                    <>
                                    <span className="font-medium">{formik.errors.firstName}</span>
                                    </>
                                }
                            />
                            <TextInput
                                id="lastName"
                                type="text"
                                name="lastName"
                                className="font-bodyTest"
                                placeholder="Votre nom..."
                                onChange={formik.handleChange}
                                value={ formik.values.lastName }
                                helperText={
                                    <>
                                    <span className="font-medium">{formik.errors.lastName}</span>
                                    </>
                                }
                            />
                            <TextInput
                                id="topic"
                                type="text"
                                name="topic"
                                className="font-bodyTest"
                                placeholder="Sujet..."
                                onChange={formik.handleChange}
                                value={ formik.values.topic }
                                helperText={
                                    <>
                                    <span className="font-medium">{formik.errors.topic}</span>
                                    </>
                                }
                            />
                            <Textarea
                                id="message"
                                name="message"
                                className="font-bodyTest"
                                placeholder="Votre message..."
                                onChange={formik.handleChange}
                                value={ formik.values.message }
                                rows={4}
                                helperText={
                                    <>
                                    <span className="font-medium">{formik.errors.message}</span>
                                    </>
                                }
                            />

                            <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-700 relative mt-4 w-75 sm:w-full p-1 ml-7 sm:ml-0 flex justify-center mt-12'>
                                <Button className="bg-blue-700 font-bodyTest">
                                    <span className="relative text-white m-1">Envoyer </span><span><IoIosSend className="relative text-white h-5 w-5" /></span>
                                </Button>
                            </span>
                        </form>
                    </Card>
                </div>
            </div>
            
        </>
    )
}