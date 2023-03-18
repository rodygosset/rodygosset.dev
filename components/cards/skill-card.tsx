import { SkillCardType } from "@utils/content-types"
import styles from "@styles/components/cards/skill-card.module.scss"
import Image from "next/image";
import { getImageURL } from "client";

interface Props {
    data: SkillCardType;
}

const SkillCard = (
    {
        data
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
        </li>
    )
}

export default SkillCard