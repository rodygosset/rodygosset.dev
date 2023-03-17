import { SkillCardType, SkillsSectionType } from "@utils/content-types";
import styles from "@styles/components/sections/skills.module.scss"
import { motion } from "framer-motion";
import { slideInLeft } from "@utils/framer-motion-animations";
import Image from "next/image";
import ScrollButton from "@components/scroll-button";

interface Props {
    content: SkillsSectionType;
    cards: SkillCardType[];
}


const SkillsSection = (
    {
        content,
        cards
    }: Props
) => {

    return (
        <section id="skills" className={styles.skillsSection}>
            <section id={styles.sectionIntro}>
                <h1>{content.section_title}</h1>
                <motion.div 
                    { ...slideInLeft }
                    className={styles.illustrationContainer}>
                    <Image 
                        quality={100}
                        src={"/images/skills-illustration.svg"} 
                        alt={"Web Development Skills Illustration"} 
                        priority
                        fill
                        style={{ 
                            objectFit: "contain", 
                            top: "auto"
                        }}
                    />
                </motion.div>
                <p>{content.intro}</p>
                <ScrollButton onClick={() => {}}>
                    { content.buttonText }
                </ScrollButton>
            </section>
            <section id={styles.skillsCards}>
                <div className={styles.sectionTitle}>
                    <h3>{content.header}</h3>
                    <p>{content.header_caption}</p>
                </div>
            </section>
        </section>
    )
}

export default SkillsSection