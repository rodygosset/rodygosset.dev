import styles from "@styles/components/my-memoji.module.scss"
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
        <div className={getClassNames()}>
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
            />
        </div>
    )
}

export default MyMemoji