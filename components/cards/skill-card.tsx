import { SkillCardType } from "@utils/content-types"
import styles from "@styles/components/cards/skill-card.module.scss"
import Image from "next/image";
import { getImageURL } from "client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";

interface Props {
    data: SkillCardType;
    unit?: string;
    isDarkMode?: boolean;
}

const SkillCard = (
    {
        data,
        unit,
        isDarkMode
    }: Props
) => {


    // utils

    const getClassNames = () => {
        let classNames = styles.card
        classNames += isDarkMode ? ' ' + styles.darkMode : ''
        return classNames
    }

    // render

    return (
        <li className={getClassNames()}>
            <div className={styles.illustrationContainer}>
                <Image 
                    quality={100}
                    src={getImageURL(data.logo)} 
                    alt={`${data.name} logo`} 
                    priority
                    fill
                    style={{ 
                        objectFit: "contain", 
                        top: "auto"
                    }}
                />
            </div>
            <p>{data.name}</p>
            <p className={styles.xp}>
                <FontAwesomeIcon icon={faHourglassHalf}/>
                <span>{ data.xp_time } { unit } </span>
            </p>
        </li>
    )
}

export default SkillCard