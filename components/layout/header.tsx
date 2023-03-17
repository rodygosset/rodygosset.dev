
import Button from "@components/button"
import styles from "@styles/layout/header.module.scss"
import Link from "next/link"
import { ReactSVG } from "react-svg"


const Header = () => {


    // render

    return (
        <header id={styles.header}>
            <Link href="/">
                <ReactSVG src="/assets/logo.svg" />
            </Link>
            <Button
                hasPadding={false}
                animateOnHover={false}
                role="tertiary"
                onClick={() => {}}>
                <ReactSVG src="/assets/burger.svg" />
            </Button>
        </header>
    )
}

export default Header