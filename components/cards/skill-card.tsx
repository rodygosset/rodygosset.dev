import { SkillCardType } from "@utils/content-types"
import styles from "@styles/components/cards/skill-card.module.scss"
import Image from "next/image";
import { getImageURL } from "client";
import Button from "@components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglass, faHourglassHalf } from "@fortawesome/free-solid-svg-icons";

interface Props {
    data: SkillCardType;
    onClick: () => void;
}

const SkillCard = (
    {
        data,
        onClick
    }: Props
) => {


    // render

    return (
        <li className={styles.card}>
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
                <span>{ data.xp_time }</span>
            </p>
        </li>
    )
}

export default SkillCard