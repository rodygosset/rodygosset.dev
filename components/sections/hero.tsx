import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "@styles/components/sections/hero.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeroSectionType } from "@utils/content-types"
import Link from "next/link";
import Image from "next/image";
import EmailBox from "../email-box";
import Button from "../button";
import MyMemoji from "../my-memoji";
import { motion } from "framer-motion";
import { fadeIn, slideInRight } from "@utils/framer-motion-animations";
import ScrollButton from "@components/scroll-button";

interface Props {
    content: HeroSectionType;
}

const HeroSection = (
    {
        content
    }: Props
) => {


    // render

    return (
        <section id="hero" className={styles.heroSection}>
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
                    <Link href={content.github_link}>
                        <FontAwesomeIcon icon={faGithub} />
                    </Link>
                    <Link href={content.linkedin_link}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                    <EmailBox 
                        address={content.email}
                        CTAText={content.email_copy_message}
                        CTASuccessText={content.email_copy_success_message}
                    />
                </motion.div>

                <ScrollButton onClick={() => {}}>
                    { content.buttonText }
                </ScrollButton>
            </div>
            
        </section>
    )
}

export default HeroSection
