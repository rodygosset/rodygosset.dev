import { ProjectCardType, WorksSectionType } from "@utils/content-types";
import styles from "@styles/components/sections/works.module.scss"
import { motion } from "framer-motion";
import { fadeIn, slideInDown, slideInLeft, slideInRight } from "@utils/framer-motion-animations";
import { useEffect } from "react"
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

    const getFirstProject = () => projects.find(project => project.name == "GEMEX") || projects[0]

    const getLeftColProjects = () => projects.filter((p, index) => index % 2 == 1 && p.name != "GEMEX")

    const getRightColProjects = () => projects.filter((p, index) => index % 2 == 0 && p.name != "GEMEX")


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
            <div className={styles.columnsContainer}>
                { /* @ts-ignore */ }
                <motion.ul { ...slideInLeft }>
                {
                    getLeftColProjects().map((project, index) => (
                        <ProjectCard 
                            key={`${project.name}_${index}`}
                            buttonText={content.project_card_cta_text}
                            content={project}
                        />
                    ))
                }
                </motion.ul>
                { /* @ts-ignore */}
                <motion.ul { ...slideInRight }>
                {
                    getRightColProjects().map((project, index) => (
                        <ProjectCard 
                            key={`${project.name}_${index}`}
                            buttonText={content.project_card_cta_text}
                            content={project}
                        />
                    ))
                }
                </motion.ul>
            </div>
        </div>
    )
}

export default WorksSection