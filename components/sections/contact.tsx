import { ContactFormType } from "@utils/content-types";
import styles from "@styles/components/sections/contact.module.scss";
import { motion } from "framer-motion";
import { fadeIn, slideInUp } from "@utils/framer-motion-animations";
import FieldContainer from "@components/form-elements/field-container";
import Label from "@components/form-elements/label";
import TextInput from "@components/form-elements/text-input";
import { FormEvent, useState } from "react"
import Button from "@components/button";
import {  faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
    id: string;
    content: ContactFormType;
}

const ContactSection = (
    {
        id,
        content
    }: Props
) => {

    const formID = 'sZWDKrg7Jb'

    // form data

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState("")


    // let the user know in case there's an error

    const [errorMessage, setErrorMessage] = useState<string | undefined>()
    const [errorFields, setErrorFields] = useState<string[]>([])

    // clear form fields

    const clearFormData = () => {
        setName("")
        setEmail("")
        setPhoneNumber("")
        setMessage("")
        setErrorFields([])
        setErrorMessage(undefined)
    }

    // validate form data before submitting

    const validate = () => {
        // make sure no fields is empty
        // as they're all required

        const tmpErrFields: string[] = []

        if(!name) tmpErrFields.push("fullName")
        if(!email) tmpErrFields.push("email")
        if(!phoneNumber) tmpErrFields.push("tel")
        if(!message) tmpErrFields.push("message")

        setErrorFields(tmpErrFields)

        return tmpErrFields.length == 0
    }

    // post form data

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        // prevent page refresh
        e.preventDefault()

        // don't submit the form if validation fails

        if(!validate()) {
            setErrorMessage(content.validation_error_message)
            return
        }
    
        // send request to the formcarry submit endpoint
        fetch(`https://formcarry.com/s/${formID}`, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({ 
                fullName: name,
                email: email, 
                number: phoneNumber,
                message: message 
            })
        })
        .then(res => res.json())
        .then(res => res.code == 200 ? clearFormData() : setErrorMessage(res.message))
        .catch(setErrorMessage);
    }

    // render

    return (
        <section id={id} className={styles.contactSection}>
            <div className={styles.sectionTitle}>
                <motion.h1 { ...fadeIn } >{content.section_title}</motion.h1>
                <motion.p { ...slideInUp } >{ content.caption }</motion.p>
                {
                    typeof errorMessage !== "undefined" ?
                    <p className={styles.error}>{ errorMessage }</p>
                    :
                    <></>
                }
            </div>
            { /* @ts-ignore */ }
            <motion.form { ...slideInUp } onSubmit={handleSubmit}>
                <FieldContainer isInErrorState={ errorFields.includes("fullName") }>
                    <Label>{ content.name_label }</Label>
                    <TextInput
                        name="fullName"
                        placeholder="John Doe"
                        currentValue={name}
                        onChange={newVal => setName(newVal)}
                        required
                    />
                </FieldContainer>
                <div className={styles.row}>
                    <FieldContainer isInErrorState={ errorFields.includes("email") }>
                        <Label>{ content.email_label }</Label>
                        <TextInput
                            name="email"
                            placeholder="johndoe@example.com"
                            currentValue={email}
                            type="email"
                            onChange={newVal => setEmail(newVal)}
                            required
                        />
                    </FieldContainer>
                    <FieldContainer isInErrorState={ errorFields.includes("tel") }>
                        <Label>{ content.phone_label }</Label>
                        <TextInput
                            name="tel"
                            placeholder="+XX XX XX XX XX XX"
                            currentValue={phoneNumber}
                            type="tel"
                            onChange={newVal => setPhoneNumber(newVal)}
                            required
                        />
                    </FieldContainer>
                </div>
                <FieldContainer isInErrorState={ errorFields.includes("message") }>
                    <Label>{ content.message_label }</Label>
                    <TextInput
                        name="message"
                        placeholder="Hello!"
                        currentValue={message}
                        onChange={newVal => setMessage(newVal)}
                        isTextArea
                        required
                    />
                </FieldContainer>
                <Button
                    icon={faArrowRight}
                    bigPadding 
                    onClick={handleSubmit}
                    type="submit">
                    { content.submit_button_text }
                </Button>
            </motion.form>
            
        </section>

    )
}

export default ContactSection