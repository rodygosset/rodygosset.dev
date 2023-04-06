import { ProjectCardType, WorksSectionType } from "@utils/content-types";
import styles from "@styles/components/sections/works.module.scss"
import { motion } from "framer-motion";
import { fadeIn, slideInDown, slideInRight } from "@utils/framer-motion-animations";
import ProjectCard from "@components/cards/project-card";

interface Props {
    id: string;
    content: WorksSectionType;
    projects: ProjectCardType[];
}

const WorksSection = (
    {
        id,
        content,
        projects
    }: Props
) => {

    // utils

    const getFirstProject = () => projects.find(project => project.name == "gemex") || projects[0]

    // render

    return (
        <div className={styles.container}>
            <section id={id} className={styles.worksSection}>
                <div className={styles.sectionIntro}>
                    <motion.h1 { ...slideInDown }>{content.section_title}</motion.h1>
                    <div className={styles.heroText}>
                        <motion.p { ...slideInRight }>{content.hero_text_caption_1}</motion.p>
                        <motion.h2 { ...fadeIn }>{content.hero_text}</motion.h2>
                        <motion.p { ...slideInRight }>{content.hero_text_caption_2}</motion.p>    
                    </div>
                </div>
                { /* @ts-ignore */ }
                <motion.ul { ...slideInRight } className={styles.heroProjectContainer}>
                    <ProjectCard 
                        buttonText={content.project_card_cta_text}
                        content={getFirstProject()}
                    />
                </motion.ul>
            </section>
            { /* @ts-ignore */ }
            <motion.ul { ...slideInRight } className={styles.projectList}>
            {
                projects.filter(p => p.name != "gemex").map((project, index) => (
                    <ProjectCard 
                        key={`${project.name}_${index}`}
                        buttonText={content.project_card_cta_text}
                        content={project}
                    />
                ))
            }
            </motion.ul>
        </div>
    )
}

export default WorksSection