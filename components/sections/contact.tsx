import { ContactFormType } from "@utils/content-types";
import styles from "@styles/components/sections/contact.module.scss";
import { motion } from "framer-motion";
import { fadeIn, slideInUp } from "@utils/framer-motion-animations";
import FieldContainer from "@components/form-elements/field-container";
import Label from "@components/form-elements/label";
import TextInput from "@components/form-elements/text-input";
import { FormEvent, useEffect, useRef, useState } from "react"
import Button from "@components/button";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "@formcarry/react";

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

    // form data

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState("")

    const formID = 'sZWDKrg7Jb'

    const [errorMessage, setErrorMessage] = useState<string>()

    const clearFormData = () => {
        setName("")
        setEmail("")
        setPhoneNumber("")
        setMessage("")
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        // prevent page refresh
        e.preventDefault();
    
        // send request to the submit form data
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
        .then(res => {
            if (res.code !== 200) {
                setErrorMessage(res.message)
            } else {
                clearFormData()
            }
        })
        .catch(setErrorMessage);
    }


    // render

    return (
        <section id={id} className={styles.contactSection}>
            <div className={styles.sectionTitle}>
                <motion.h1 { ...fadeIn } >{content.section_title}</motion.h1>
                <motion.p { ...slideInUp } >{ content.caption }</motion.p>
            </div>
            { /* @ts-ignore */ }
            <motion.form { ...slideInUp } onSubmit={handleSubmit}>
                <FieldContainer>
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
                    <FieldContainer>
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
                    <FieldContainer>
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
                <FieldContainer>
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