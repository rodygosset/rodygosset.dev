import { ContactFormType } from "@utils/content-types";
import styles from "@styles/components/sections/contact.module.scss";
import { motion } from "framer-motion";
import { fadeIn, slideInUp } from "@utils/framer-motion-animations";
import FieldContainer from "@components/form-elements/field-container";
import Label from "@components/form-elements/label";
import TextInput from "@components/form-elements/text-input";
import { useState } from "react"
import Button from "@components/button";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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

    // handlers

    const handleSubmit = () => {
        // TODO
    }


    // render

    return (
        <section id={id} className={styles.contactSection}>
            <div className={styles.sectionTitle}>
                <motion.h1 { ...fadeIn } >{content.section_title}</motion.h1>
                <motion.p { ...slideInUp } >{ content.caption }</motion.p>
            </div>
            { /* @ts-ignore */ }
            <motion.form { ...slideInUp }>
                <FieldContainer>
                    <Label>{ content.name_label }</Label>
                    <TextInput
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
                            placeholder="johndoe@example.com"
                            currentValue={email}
                            onChange={newVal => setEmail(newVal)}
                            required
                        />
                    </FieldContainer>
                    <FieldContainer>
                        <Label>{ content.phone_label }</Label>
                        <TextInput
                            placeholder="+XX XX XX XX XX XX"
                            currentValue={phoneNumber}
                            onChange={newVal => setPhoneNumber(newVal)}
                            required
                        />
                    </FieldContainer>
                </div>
                <FieldContainer>
                    <Label>{ content.message_label }</Label>
                    <TextInput
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
                    onClick={handleSubmit}>
                    { content.submit_button_text }
                </Button>
            </motion.form>
        </section>

    )
}

export default ContactSection