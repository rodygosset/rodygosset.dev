import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectCardType } from "@utils/content-types"
import Link from "next/link";
import Image from "next/image";
import styles from "@styles/components/cards/project-card.module.scss";
import { getImageURL } from "client";
import { useRouter } from "next/router";

interface Props {
    buttonText: string;
    content: ProjectCardType;
}

const ProjectCard = (
    {
        buttonText,
        content
    }: Props
) => {

    // handlers

    const router = useRouter()

    const handleClick = () => router.push(getProjectLink())

    // utils

    const getProjectLink = () => `/projects/${content.name}`


    // render

    return (
        <li className={styles.card} onClick={handleClick}>
            <div className={styles.imageContainer}>
                <Image 
                    quality={100}
                    src={getImageURL(content.thumbnail)} 
                    alt={"Rody Gosset's memoji"} 
                    priority
                    fill
                    style={{ 
                        objectFit: "cover", 
                        top: "auto"
                    }}
                />
            </div>
            <div className={styles.textContent}>
                <h3>{ content.title }</h3>
                <Link href={getProjectLink()} onClick={e => e.stopPropagation()}>
                    <FontAwesomeIcon icon={faArrowRight}/>
                    { buttonText }
                </Link>
                <p>{ content.description }</p>
            </div>
        </li>
    )


}

export default ProjectCard