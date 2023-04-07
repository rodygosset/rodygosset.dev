import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "@styles/components/sections/hero.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeroSectionType } from "@utils/content-types"
import Link from "next/link";
import EmailBox from "../email-box";
import MyMemoji from "../my-memoji";
import { motion } from "framer-motion";
import { fadeIn, slideInRight } from "@utils/framer-motion-animations";
import ScrollButton from "@components/scroll-button";

interface Props {
    id: string;
    content: HeroSectionType;
}

const HeroSection = (
    {
        id,
        content
    }: Props
) => {


    // render

    return (
        <section id={id} className={styles.heroSection}>
            <MyMemoji 
                className={styles.desktopIllustration}
                square
            />
            <div className={styles.textContent}>
                <motion.div 
                    { ...slideInRight }
                    className={styles.greeting}>
                    <p>{content.greeting_start}</p>
                    <h1>{content.full_name}</h1>
                    <p>{content.job_title}</p>
                </motion.div>

                <MyMemoji className={styles.mobileIllustration}/>

                <motion.p { ...fadeIn } className={styles.intro}>{content.intro}</motion.p>

                <motion.div 
                    { ...fadeIn }
                    className={styles.links}>
                    <Link href={content.github_link} target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                        <span style={{ display: 'none' }}>GitHub</span>
                    </Link>
                    <Link href={content.linkedin_link} target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                        <span style={{ display: 'none' }}>LinkedIn</span>
                    </Link>
                    <EmailBox 
                        address={content.email}
                        CTAText={content.email_copy_message}
                        CTASuccessText={content.email_copy_success_message}
                    />
                </motion.div>

                <ScrollButton sectionId="skills">
                    { content.buttonText }
                </ScrollButton>
            </div>
            
        </section>
    )
}

export default HeroSection
