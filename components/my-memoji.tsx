import styles from "@styles/components/my-memoji.module.scss"
import { slideInLeft } from "@utils/framer-motion-animations";
import { motion } from "framer-motion";
import Image from "next/image"

interface Props {
    className?: string;
    square?: boolean;
}

const MyMemoji = (
    {
        className,
        square
    }: Props
) => {

    // utils

    const getClassNames = () => {
        let classNames = styles.illustrationContainer
        classNames += className ? ' ' + className : ''
        return classNames
    }

    const getSource = () => `/images/my-memoji${square ? '' : '-rectangle' }.png`


    // render

    return (
        <motion.div 
            { ...slideInLeft }
            className={getClassNames()}>
            <Image 
                quality={100}
                src={getSource()} 
                alt={"Rody Gosset's memoji"} 
                priority
                fill
                style={{ 
                    objectFit: "contain", 
                    top: "auto"
                }}
                loading="eager"
            />
        </motion.div>
    )
}

export default MyMemoji