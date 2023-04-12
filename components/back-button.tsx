import { useRouter } from "next/router"
import styles from "@styles/components/back-button.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

// just a cool looking button
// allowing the user to go back

const BackButton = () => {


    const router = useRouter()

    // handlers

    const handleClick = () => router.back()

    // render

    return (
        <button className={styles.backButton} onClick={handleClick}>
            <FontAwesomeIcon icon={faChevronLeft}/>
        </button>
    )
}

export default BackButton