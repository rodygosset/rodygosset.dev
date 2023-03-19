import { SkillCardType, SkillsSectionType } from "@utils/content-types";
import styles from "@styles/components/sections/skills.module.scss"
import { motion } from "framer-motion";
import { slideInDown, slideInLeft, slideInUp } from "@utils/framer-motion-animations";
import Image from "next/image";
import ScrollButton from "@components/scroll-button";
import SkillCard from "@components/cards/skill-card";

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

    // utils

    const getSkillXpUnit = (card: SkillCardType) => {
        if(card.xp_unit == "M") return card.xp_time > 1 ? content.month_unit_label_plural : content.month_unit_label_singular 
        else return card.xp_time > 1 ? content.year_unit_label_plural : content.year_unit_label_singular
    }

    // render

    return (
        <section id="skills" className={styles.skillsSection}>
            <section id={styles.sectionIntro}>
                <motion.h1 { ...slideInDown } >{content.section_title}</motion.h1>
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
                <motion.p { ...slideInUp } >{content.intro}</motion.p>
                <ScrollButton sectionId="works">
                    { content.buttonText }
                </ScrollButton>
            </section>
            <section id={styles.skillsCards}>
                <div className={styles.sectionTitle}>
                    <h3>{content.header}</h3>
                    <p>{content.header_caption}</p>
                    <p className={styles.skillCardsCTA}>{content.skill_card_cta_text}</p>
                </div>
                <ul>
                {
                    cards.map(card => (
                        <SkillCard 
                            key={card.name} 
                            data={card} 
                            unit={getSkillXpUnit(card)}
                        />
                    ))
                }
                </ul>
            </section>
        </section>
    )
}

export default SkillsSection