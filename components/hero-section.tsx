import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "@styles/components/hero-section.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeroSectionType } from "@utils/content-types"
import Link from "next/link";
import Image from "next/image";
import EmailBox from "./email-box";
import Button from "./button";
import MyMemoji from "./my-memoji";

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
                <div className={styles.greeting}>
                    <p>{content.greeting_start}</p>
                    <h1>{content.full_name}</h1>
                    <p>{content.job_title}</p>
                </div>

                <MyMemoji className={styles.mobileIllustration}/>

                <p className={styles.intro}>{content.intro}</p>

                <div className={styles.links}>
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
                </div>

                <Button
                    fancy
                    animateOnHover={false}
                    onClick={() => {}}>
                    <Image 
                        quality={100}
                        src={'/assets/arrow-down.svg'} 
                        alt={"Arrow down icon"} 
                        priority
                        width={14}
                        height={14}
                    />
                    <span>{ content.buttonText }</span>
                </Button>
            </div>
            
        </section>
    )
}

export default HeroSection
