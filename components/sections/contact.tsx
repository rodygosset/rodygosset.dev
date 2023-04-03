import { ContactFormType } from "@utils/content-types";
import styles from "@styles/components/sections/contact.module.scss";
import { motion } from "framer-motion";
import { fadeIn, slideInUp } from "@utils/framer-motion-animations";


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


    // render

    return (
        <section id={id} className={styles.contactSection}>
            <div className={styles.sectionTitle}>
                <motion.h1 { ...fadeIn } >{content.section_title}</motion.h1>
                <motion.p { ...slideInUp } >{ content.caption }</motion.p>
            </div>
        </section>

    )
}

export default ContactSection